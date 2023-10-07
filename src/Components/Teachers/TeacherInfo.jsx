import { useLoaderData, useParams } from "react-router-dom";

const TeacherInfo = () => {
    const data  = useLoaderData()
    const {id} = useParams()
    console.log(id);
    const user = data.find(element => element.name.toLowerCase() == id)
    console.log(user);
    return (
        <>
        <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>Teacher Information</h1>

                </div>
            </div>
            <section className="lg:mt-20 mx-10 mt-10">
                <div className="flex flex-wrap lg:gap-20 gap-10">
                    <img className="h-72" src={user.image_url} alt="" />
                    <div className="my-auto">
                        <h1 className="text-4xl font-semibold">{user.name}</h1>
                        <p className="text-xl"><span>Expertise: </span>{user.expertise} </p>
                    </div>
                </div>
                <div className="lg:mt-10 mt-5">
                    <h1 className="text-3xl font-semibold underline ">About</h1>
                    <p className="my-5">{user.details}</p>
                </div>
            </section>
        </>
    );
};

export default TeacherInfo;