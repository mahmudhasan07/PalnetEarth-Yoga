import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper } from "swiper/types";
import 'swiper/css'
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const FeedBack = () => {
    const [array, setarray] = useState([])

    useEffect(() => {
        fetch('/FeedBack.json')
            .then(res => res.json())
            .then(data => setarray(data))
    }, [])
    return (
        <div className="lg:my-20 my-10">
            <h1 className="text-3xl font-bold text-center underline mb-5">What Our Members Said For Us</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={2}
                
                //   centeredSlides={true}
                navigation
                pagination={{ clickable: true, currentClass : true }}
            >
                {
                    array.map((element, idx) => <SwiperSlide key={idx} className="my-8 ">  <Review key={idx} card={element}></Review> </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

const Review = ({ card }) => {
    return (

        <div className="lg:w-[650px] w-2/3 lg:h-56 h-fit ml-14 border lg:p-5 p-1 border-blue-500 rounded-xl">
            <p>{card.note}</p>
            <hr className="w-full my-3" />
            <h1 className="text-lg font-semibold">{card.name}</h1>
            Member Since
            <p>{card.join}</p>
        </div>
    )
}

export default FeedBack;