import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Benefits = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <section className="lg:mt-20 mt-10">
            <div data-aos="fade-right" className="flex flex-wrap justify-around gap-5">
                <div className="">
                <img className="h-96" src="https://i.ibb.co/4KqtX9t/6-people-yoga-pose.jpg" alt="" />
                {/* <img className="w-60 h-48 absolute -mt-14 left-48" src="https://i.ibb.co/68S4GqK/Get-Your-Yoga-On.jpg" alt="" /> */}
                </div>
                <div data-aos="fade-left" data-aos-delay="300" className="lg:w-1/2 w-2/3">
                    <h1 className="text-4xl font-bold text-center mb-2">Benefits of Yoga</h1>
                    <hr className="border-4 w-40 mx-auto my-5 border-blue-600 rounded-xl" />
                    <p className="text-lg mb-3 text-center">Yoga combines physical postures, controlled breathing, and meditation to help you lower stress, anxiety and blood pressure. It also increases mental and physical resilience. Most importantly, yoga can help you reflect on life, accept what happened yesterday, learn how to live today, and maintain a spirit full of hope for tomorrow.</p>
                    <p className="text-lg mb-3 text-center">Yoga has been shown to help people with autism improve communication and social activity and lessen aggression. It can also help those with anxiety, depression, and ADHD improve mood, build mental resilience and become more grounded.</p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;