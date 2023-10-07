import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()
    const handlereg =()=>{
        navigate("/login")
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold mb-5">Registration now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo" className="input input-bordered w-96" required />
                            </div>
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
                            <div className="form-control mt-6">
                                <button onClick={handlereg} className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;