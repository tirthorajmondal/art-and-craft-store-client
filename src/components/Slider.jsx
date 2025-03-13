
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full relative">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/99hGcKph/home-decor.webp"
                        className="w-full  h-52 md:h-[calc(100vh-50px)] " />
                </div>
                <div id="item2" className="carousel-item w-full   md:h-80 ">
                    <img
                        src="https://i.ibb.co.com/6R5GRvPx/jewellery.webp"
                        className="w-full   h-52 md:h-[calc(100vh-50px)]" />
                </div>
                <div id="item3" className="carousel-item w-full   md:h-80">
                    <img
                        src="https://i.ibb.co.com/xSCdWZNr/jute-kitchenware-and-utensils.webp"
                        className="w-full  h-52 md:h-[calc(100vh-50px)]" />
                </div>
                <div id="item4" className="carousel-item w-full  md:h-80">
                    <img
                        src="https://i.ibb.co.com/b5kWsYvG/spoon.jpg"
                        className="w-full  h-52 md:h-[calc(100vh-50px)]" />
                </div>
                <div id="item5" className="carousel-item w-full  md:h-80">
                    <img
                        src="https://i.ibb.co.com/vC9bFTpm/furniture.jpg"
                        className="w-full  h-52 md:h-[calc(100vh-50px)] " />
                </div>

            </div>
            <div className="flex w-full absolute bottom-0 justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Slider;