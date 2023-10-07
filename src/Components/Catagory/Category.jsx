import { useLoaderData, useNavigate } from "react-router-dom";

const Category = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <>
            <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>Categories Of Yoga</h1>

                </div>
            </div>
            <div className='text-center lg:mt-20 mt-10'>
                <input type="text" placeholder='Enter teacher name' className='border-2 border-blue-500 w-80 p-2 rounded-lg' />
                <button className='btn bg-blue-600 text-white'>Search</button>
            </div>
            <section>
                <div className="lg:mt-10 mt-5 flex flex-wrap gap-10 justify-center">
                    {
                        data.map((element, idx) => <Categories key={idx} card={element} ></Categories>)
                    }
                </div>
            </section>
        </>
    );
};


const Categories = ({ card }) => {
    const navigate = useNavigate()
    const handlediv = () => {
        navigate(`/category/${card.type}`.toLowerCase())
    }
    return (
        <div onClick={handlediv} className="card border-2 shadow-lg hover: hover:shadow-2xl border-blue-400 text-center w-72">
            <img className="w-56 h-64 mx-auto pt-1" src={card.image_url} alt="" />
            <p className="text-base my-3"><span className="text-lg font-semibold">Name: </span>{card.type} </p>
        </div>
    )
}

export default Category;