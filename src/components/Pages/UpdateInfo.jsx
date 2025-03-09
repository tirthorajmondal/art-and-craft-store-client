import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateInfo = () => {
    const product = useLoaderData()
    const { customization,
        image,
        item_name,
        price,
        processing_time,
        rating,
        short_description,
        stock_status,
        subcategory_name, } = product;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            customization: customization,
            image: image,
            item_name: item_name,
            price: price,
            processing_time: processing_time,
            rating: rating,
            short_description: short_description,
            stock_status: stock_status,
            subcategory_name: subcategory_name,

        }
    });

    const onSubmit = (formInfo) => {
        console.log(formInfo);
        fetch(`http://localhost:5000/product/${product._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Product Updated')
                    reset();
                }
            })

    };
    return (
        <div className="mx-2">
            <h2 className="text-center font-bold text-4xl mt-3">Add Your Product</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full md:w-3/4 lg:w-1/2  rounded-md  md:mx-auto my-4 bg-slate-300 grid md:grid-cols-2 p-4 gap-x-5 gap-y-2">
                {/* Item Name */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Item Name</label>
                    <input
                        {...register("item_name", { required: "Item name is required" })}
                        type="text"
                        className="w-full  p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                        placeholder="Enter item name"
                    />
                    {errors.item_name && <p className="text-red-500 text-sm ">{errors.item_name.message}</p>}
                </div>

                {/* Subcategory Name */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Subcategory Name</label>
                    <input
                        {...register("subcategory_name", { required: "Subcategory name is required" })}
                        type="text"
                        className="w-full p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                        placeholder="Enter subcategory name"
                    />
                    {errors.subcategory_name && <p className="text-red-500 text-sm">{errors.subcategory_name.message}</p>}
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Image URL</label>
                    <input
                        {...register("image", { required: "Image URL is required" })}
                        type="url"
                        className="text-primary w-full p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                        placeholder="Enter image URL"
                    />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </div>

                {/* Customization */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Customization</label>
                    <select
                        {...register("customization", { required: "Please select an option" })}
                        className="w-full p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>
                    {errors.customization && <p className="text-red-500 text-sm">{errors.customization.message}</p>}
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Rating</label>
                    <select
                        {...register("rating", { required: "Rating is required" })}
                        className="w-full p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                    >
                        <option value="">Select</option>
                        <option value="1">1 </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
                </div>

                {/* Stock Status */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Stock Status</label>
                    <select
                        {...register("stock_status", { required: "Please select stock status" })}
                        className="w-full p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                    >
                        <option value="">Select</option>
                        <option value="in_stock">In Stock</option>
                        <option value="made_to_order">Made to Order</option>
                    </select>
                    {errors.stock_status && <p className="text-red-500 text-sm">{errors.stock_status.message}</p>}
                </div>

                {/* Price */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Price (USD)</label>
                    <input
                        {...register("price", { required: "Price is required", valueAsNumber: true })}
                        type="number"
                        className="w-full p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]
                        [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter price"
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>

                {/* Processing Time */}
                <div>
                    <label className="block text-[#3A3A3A] font-semibold">Processing Time (Days)</label>
                    <input
                        {...register("processing_time", {
                            required: "Processing time is required",
                            min: { value: 1, message: "Minimum processing time is 1 day" },
                            max: { value: 15, message: "Maximum time processing is 15 days" },
                        })}
                        type="number"
                        className="w-full p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23] 

                     [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter processing time in days"
                    />
                    {errors.processing_time && <p className="text-red-500 text-sm">{errors.processing_time.message}</p>}
                </div>

                {/* Short Description */}
                <div className='col-span-1 md:col-span-2'>
                    <label className="block w-full  text-[#3A3A3A] font-semibold">Short Description</label>
                    <textarea
                        {...register("short_description", { required: "Short description is required" })}
                        className="w-full col-span-2 p-2 focus:border-none rounded focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
                        placeholder="Enter short description"
                        rows="2"
                    ></textarea>
                    {errors.short_description && <p className="text-red-500 text-sm">{errors.short_description.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full md:col-span-2 bg-[#D2691E] text-white py-2 rounded hover:bg-[#A0522D] transition"
                >
                    Update Item
                </button>
            </form>
        </div>

    );
};

export default UpdateInfo;