import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../User/ConTextApi/ConTextApi";

const NavBar = () => {
    const {user,logOut} = useContext(Context)
    console.log(user);
    const Links = 
    <>
    <NavLink to={`/`} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-blue-500 rounded-lg" : ""}><li className="text-base p-2">Home</li></NavLink>
    <NavLink to={`/classes/0`} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-blue-500 rounded-lg" : ""}><li className="text-base p-2">Classes</li></NavLink>
    <NavLink to={`/teachers`} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-blue-500  rounded-lg" : ""}><li className="text-base p-2">Teachers</li></NavLink>
    <NavLink to={`/category`} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-blue-500 rounded-lg" : ""}><li className="text-base p-2">Category </li></NavLink>
    <NavLink to={`/bookmark`} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-blue-500 rounded-lg" : ""}><li className="text-base p-2">Save Videos </li></NavLink>
    <NavLink to={`/contact`} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-blue-500 rounded-lg" : ""}><li className="text-base p-2">Contact Us</li></NavLink>
    </>

    const handleout=()=>{
logOut()
    }

    const img = "https://i.ibb.co/x2s5yMM/8380015.jpg"
    return (
        <>
            <div className="navbar bg-transparent  bg-opacity-50 absolute text-white lg:px-10 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <NavLink className=" normal-case text-2xl font-bold">Palnet<span>Earth</span> Yoga</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-5 my-auto menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <div className="flex flex-wrap  justify-end gap-2  "> <div className="bg-blue-500  border-2 rounded-xl flex">{user.photoURL== null? <img className="w-8 h-8 my-auto" src={img} alt="" /> : <img className="w-8 h-8 my-auto" src={user.photoURL} alt="" />  } <p className=" my-auto p-2  font-bold mr-3">{user.displayName}</p></div> <button className="btn" onClick={handleout}>LogOut</button> </div>
                        :
                        <NavLink to={`/login`} className="btn">Login</NavLink>
                    }
                </div>
            </div>
            
        </>
    );
};

export default NavBar;