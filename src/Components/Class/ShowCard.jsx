import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import swal from 'sweetalert';
import { setValue } from "./Stroage";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ShowCard = () => {
    const { id } = useParams()
    // const [user, setUser] = useState([])
    const data = useLoaderData()
        const array = data.filter(element => element.id == id)
    console.log(array);
    // console.log(data);
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div  className="flex flex-wrap gap-5 justify-center">
            {
               id> 0 ? array.map((element,idx) => <ShowData key={idx} card={element}></ShowData>)
               :
               data.map((element,idx) => <ShowData key={idx} card={element}></ShowData>)
            }
        </div>
    );
};

const ShowData = ({ card }) => {
    const handlesave=(unique)=>{
        console.log(unique);
        const data = setValue(unique)
        swal("BookMark", "Successfully save your favorite class ", "success");
        // alert("BookMarks")
    }
    return (
        <>
        <div data-aos="fade-up" className="card w-96 flex flex-col my-10  p-3 border-2 ">
            <iframe className="w-80 h-72 mx-auto" src={card.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className="text-lg text-center flex-grow font-semibold mt-3">{card.title}</p> 
            <button onClick={()=>handlesave(card.unique)} className="flex gap-2 text-xl   justify-end "><BsFillBookmarkCheckFill className="my-auto"></BsFillBookmarkCheckFill> BookMark</button>
        </div>
        </>
    )
}

export default ShowCard;