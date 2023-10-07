import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold mb-5">Login now!</h1>
    
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered w-96" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <NavLink to='/registration' className=" text-red-500 font-semibold flex justify-end ">New User ?</NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;