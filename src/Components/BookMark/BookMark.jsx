import { useEffect, useState } from "react";
import { getValue } from "../Class/Stroage";
import { useLoaderData } from "react-router-dom";


const BookMark = () => {
    const users = useLoaderData()
    const [data, setdata]= useState([])
    useEffect(()=>{
        const value = getValue()
        const array = []
        for(const id of value){
            const datas = users.find(element=> element.unique == id)
            array.push(datas)
            // setdata(datas)
        }
        setdata(array)
    },[])
    console.log(data);
    return (
        <section>
            <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>Your BookMark Videos</h1>

                </div>
            </div>
        <div className="flex flex-wrap justify-center gap-5 lg:my-16 my-8">
            {
                data.length >0 ? data.map(element=> <Save key={element.unique} card={element}></Save> )
                : 
                <p className="text-lg font-semibold">No Videos are saved</p>
            }
        </div>
        </section>
    );
};

const Save =({card})=>{
    console.log(card);
    return(
        <section className="">
            
        <div className="flex border-2 w-96 h-72 p-2 border-blue-400 rounded-xl flex-wrap gap-5">
<iframe className="mx-auto" src={card.video}></iframe>
<div className="my-auto">
    <h1 className="font-semibold text-xl">{card.title}</h1>
    <p className="font-bold mt-3">{card.name}</p>
</div>
        </div>
        </section>
    )
}

export default BookMark;