import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { NavLink, useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Teachers = () => {
    const data = useLoaderData()
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <>
            <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>Our Teachers</h1>

                </div>
            </div>
            {/* <div className='text-center lg:mt-20 mt-10'>
                <input type="text" placeholder='Enter teacher name' className='border-2 border-blue-500 w-80 p-2 rounded-lg' />
                <button className='btn bg-blue-600 text-white'>Search</button>
            </div> */}
            <div className='lg:mt-10 mt-5 flex flex-wrap justify-center gap-10'>
                {
                    data.map((element, idx) => <Teacher key={idx} card={element}></Teacher>)
                }
            </div>
        </>
    );
};

const Teacher = ({ card }) => {
    return (
        <>
            <div  data-aos="fade-up" data-aos-delay="100" className='card border-2 border-gray-300 w-72'>
                <img className='w-60 h-72 mx-auto' src={card.image_url} alt="" />
                <p className='text-center text-xl my-2'><span className='font-bold'>Name: </span>{card.name}</p>
                <NavLink to={`/teachers/${card.name}`.toLowerCase()} className={`btn bg-blue-600 text-white text-lg`}>Details</NavLink>
            </div>
        </>
    )
}

export default Teachers;