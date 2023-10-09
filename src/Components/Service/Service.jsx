import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Service = () => {
    // const data = useLoaderData();
    const [data, setdata] = useState([])

    useEffect(()=>{
        fetch('/Service.json')
        .then(res=> res.json())
        .then(value => setdata(value))

        AOS.init()
    },[])
    console.log(data);
    return (
        <div>
            <h1 className="text-4xl underline font-bold text-center lg:mt-20 mt-10">Our Services</h1>
            <div className="flex flex-wrap gap-5 justify-center my-10">
                {
                    data.map((element,idx) => <Details key={idx} card={element}></Details>)
                }
            </div>

        </div>
    );
};

const Details = ({ card }) => {
    return (

        <div data-aos="slide-up" className="card w-72 p-3 flex flex-col  border-2 bg-blue-500 text-neutral-content text-white">
            <img className="w-60 h-40 mx-auto" src={card.image} alt="" />
            <h1 className="text-2xl font-semibold my-2">{card.name}</h1>
            <p><span className="text-xl my-1 font-semibold">Price: </span>{card.price} </p>
            <p className="font-semibold">Features :</p>
            <ul className="list-disc px-5 flex-grow my-2">
                <li className="list-disc">{card.features[0]}</li>
                <li className="list-disc">{card.features[1]}</li>
            </ul>
            <p className=" font-semibold">Click the button for more about features</p>
            <NavLink to={`/service/${card.id}`}><button className="btn">Show Detail</button></NavLink>
            
        </div>
    )
}

export default Service;