import { useContext, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "./ConTextApi/ConTextApi";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import swal from "sweetalert";

const Registration = () => {
    const {createUser,logOut,updateInfo,user} = useContext(Context)
    const navigate = useNavigate()
    // const location = useLocation()
// console.log("hi", location);
    const name = useRef()
    const number = useRef()
    const email = useRef()
    const password = useRef()

    const handlereg =(e)=>{
        e.preventDefault()
        const Name = name.current.value
        const Number = number.current.value
        const Email = email.current.value
        const Password = password.current.value

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{6,}$/.test(Password)){
            toast.warn("Password must be 7 characters with upper&lower case and symbols")
            return
        }
        createUser(Email,Password)
            .then(result =>{
                console.log(result.user);
                updateInfo(Name,Number)
                .then(result=>{
                    console.log(result.user)
                    logOut()
                })
                .catch(error=>{
                    console.log(error.message);
                })
                navigate("/login")
                // toast.success('Registration Successfully done ')
            })
            .catch(error=>{
                toast.warn(error.message)
            })
        
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
                                <input ref={name} type="text" placeholder="name" className="input input-bordered lg:w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input ref={number} type="text" placeholder="number" className="input input-bordered lg:w-96" required />
                            </div>
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
                            <NavLink to='/login' className=" text-red-500 font-semibold flex justify-end ">Already User ?</NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handlereg} className="btn btn-primary">Registration</button>
                                <ToastContainer></ToastContainer>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;