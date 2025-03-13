import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate, } from "react-router-dom";

const Login = () => {
    const { handleSignIn, googleSignIn, setUser, user } = useContext(AuthContext)
    const location = useLocation()
    const navigte = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    setUser(result.user);
                    navigte(location?.state || '/')
                }
            })
            .catch(error => { })
    }


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleSignIn(email, password)
            .then(result => {
                if (result.user) {
                    setUser(result.user)
                    navigte(location?.state || '/')
                }
            })
            .catch(error => { })

    }

    if (!user) {
        return (
            <div className="h-[calc(100vh-150px)] flex justify-center items-center">

                <div className="flex flex-col p-4 border-2">
                    <form
                        onSubmit={handleLogin}
                        className="space-y-2 bg-purple-200 p-6 rounded-md flex flex-col gap-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" name="email" placeholder="Email" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" name="password" placeholder="password" />
                        </label>
                        <button className="btn btn-primary w-full" type="submit">Login</button>
                    </form>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-ghost border w-fit self-center">Google</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <Navigate to={location?.state} />
            // <div className=" min-h-[calc(100vh-114px)] flex flex-col justify-center items-center text-5xl">
            //     You are already logged in
            //     <button
            //         className="btn btn-info"><Link to='/all-items'>All items</Link></button>
            // </div>
        )
    }
};

export default Login;