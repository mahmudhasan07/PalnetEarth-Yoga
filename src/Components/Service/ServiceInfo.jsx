import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceInfo = () => {
    const { id } = useParams()
    const [data, setdata] = useState([])
    // const data = useLoaderData()

    useEffect(() => {
        fetch('../../../public/Service.json')
            .then(res => res.json())
            .then(value => setdata(value))
    }, [])

    const array = data.find(element => element.id == id)
    console.log(data);
    console.log(array);

    return (
        <>
        <section>
        <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>About Your Purchase Plan</h1>

                </div>
            </div>
            <div className="mx-10 lg:my-16 my-5">
                <div className="flex  justify-around">
                    <img className="w-1/2" src={array?.image} alt="" />
                    <div className="my-auto">
                    <h1 className="text-3xl font-semibold">{array?.name}</h1>
                    <button className="btn text-lg bg-blue-400 text-white "><span className="text-xl font-semibold">Price: </span>{array?.price}</button>
                    <div>
                    <h1 className="text-2xl font-semibold">Features :</h1>
                    <ul className="list-disc mx-auto my-5 ">
                        <li>{array?.features[0]}</li>
                        <li>{array?.features[1]}</li>
                        <li>{array?.features[2]}</li>
                        <li>{array?.features[3]}</li>
                        <li>{array?.features[4]}</li>
                        <li>{array?.features[5]}</li>
                    </ul>
                </div>
                    </div>
                </div>
                
                </div>
            </section>

        </>
    );
};



export default ServiceInfo;