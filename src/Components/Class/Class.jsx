import { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

const Class = () => {

    const [btn, setbtn] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('../../../public/Lists.json')
            .then(res => res.json())
            .then(value => setbtn(value))
    }, [])

    const handlebtn = (id) => {
        console.log("click", id);
        navigate(`/classes/${id}`)
    }
    return (
        <>
            <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>Our Online Classes</h1>

                </div>
            </div>

            <section>
                <div className="flex flex-wrap mx-8 justify-center">
                    {
                        btn.map((element, idx) => <button onClick={() => handlebtn(element.id)} key={idx} className="btn m-1 bg-blue-600 text-white">{element.name}</button>)
                    }
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </section>
        </>
    );
};

export default Class;