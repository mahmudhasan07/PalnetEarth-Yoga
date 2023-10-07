import { useLoaderData, useParams } from "react-router-dom";

const CategoriesInfo = () => {
    const { id } = useParams()
    const data = useLoaderData()

    const user = data.find(element => element.type.toLowerCase() == id)
    console.log(user);
    return (
        <>
            <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>Categories Of Yoga</h1>

                </div>
            </div>
            <section className="lg:mx-16 lg:my-20  mx-5 my-10">
<div className="flex flex-wrap gap-20">
    <img className="w-72" src={user.image_url} alt="" />
    <p className="my-auto text-3xl font-bold">{user.type}</p>
</div>
<div className="lg:my-10 my-5">
    <h1 className="text-2xl font-semibold mb-3">What is {user.type} ?</h1>
    <p className="text-lg">{user.description.part1}</p>
</div>
<div className="lg:my-10 my-5">
    <h1 className="text-2xl font-semibold mb-3">Benefits {user.type} </h1>
    <p className="text-lg">{user.description.part2}</p>
</div>
<div className="lg:my-10 my-5">
    <h1 className="text-2xl font-semibold mb-3">History of {user.type} </h1>
    <p className="text-lg">{user.description.part3}</p>
</div>
            </section>
        </>
    );
};

export default CategoriesInfo;