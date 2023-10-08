import { useContext, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "./ConTextApi/ConTextApi";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import {FcGoogle} from "react-icons/fc"

const Login = () => {
    const { user, signUser, googlelogin } = useContext(Context)
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()
    // const loc = useLocation()
    const location = useLocation()
    // console.log("hello", location);

    const handlelogin = (e) => {
        e.preventDefault()
        const Email = email.current.value
        const Password = password.current.value

        signUser(Email, Password)
            .then(result => {
                console.log(result.user);
                if (location.state) {
                    navigate(`${location.state}`)
                }
                else {
                    navigate('/')
                }

            })
            .catch(error => {
                toast.warn("Wrong email or Password, please check again")
                console.log(error.message);
            })

    }
    const handlegoogle = () => {
        googlelogin()
    }
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
                                <input ref={email} type="email" placeholder="email" className="input input-bordered lg:w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={password} type="password" placeholder="password" className="input input-bordered lg:w-96" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <NavLink to='/registration' className=" text-red-500 font-semibold flex justify-end ">New User ?</NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handlelogin} className="btn btn-primary">Login</button>
                            <div>
                                <button className="border-2 flex w-full mt-3 justify-center gap-2 border-blue-400 py-1 px-2" onClick={handlegoogle}> <FcGoogle className="text-xl my-auto"></FcGoogle> LogIn with Google</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Login;