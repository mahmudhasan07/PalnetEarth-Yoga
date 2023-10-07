import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink, useLoaderData } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavBar from "../NavBar/NavBar";
import Benefits from "../Benefits/Benefits";
import FeedBack from "../FeedBack/FeedBack";


const Banner = () => {
    const data = useLoaderData()

    // const cardDetails =
    // <>

    // </>

    console.log(data);
    const user = data.find (element=> element.type == 'Prenatal Yoga')
    const [bgimg, setbgimg] = useState("https://i.ibb.co/3SBMxP4/Prenatal-Yoga.jpg")
    const [Info, setInfo] = useState(user)
    const handlediv = (element) => {
        setInfo(element)
        setbgimg(element.image_url)
    }
    
    console.log(Info);

    return (
        <>
            <div className="h-[600px]" style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                {/* <NavBar></NavBar> */}
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <div className="w-1/3 my-auto text-white">
                        <h1 className="text-4xl font-bold mb-5">{Info.type}</h1>
                        <p className="text-lg font-semibold mb-4">{Info.description}</p>
                        <NavLink className={`text-xl bg-blue-600 py-1 px-2 rounded-lg `}>More Detail</NavLink>
                    </div>
                    <div className="w-1/3 my-auto">
                        <Swiper
                        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={3}
                            centeredSlides={true}
                            navigation={true}
                            autoplay={{delay: 2500,pauseOnMouseEnter: true}}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            // onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {

                                data.map((element, idx) =>
                                    <SwiperSlide>
                                        <div onClick={() => handlediv(element)}>
                                            <img className="w-52 h-48 rounded-xl" src={element.image_url} alt="" />
                                            <p>{element.type}</p>
                                        </div>
                                    </SwiperSlide>
                                )

                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="lg:mx-10 mx-auto">
                <Benefits></Benefits>
            </div>
            <div className="">
               <FeedBack></FeedBack>
            </div>
            <div className="">
            
            </div>
        </>
    );
};

// const BCards =({card})=>{
// const handlediv =()=>{
// console.log(card);
// }
//     return(
//         <>

//         <div onClick={handlediv}>
//             <img className="w-48 h-60 snap-center" src={card.image_url} alt="" />
//         </div>
//         </>
//     )
// }

export default Banner;