const Contact = () => {
    return (
        <section>
            <div className="h-[300px]" style={{ backgroundImage: `url(https://i.ibb.co/yVzNpPt/pxfuel-1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className="text-neutral-content flex  justify-around text-center bg-opacity-50 bg-black hero-overlay">
                    <h1 className='my-auto text-4xl font-bold text-white'>Contact Us</h1>

                </div>
            </div>
            <div className="lg:my-16 my-8">
            <h1 className="text-lg"><span className="text-2xl font-semibold">Address: </span> London city</h1>
            <p className="text-lg"><span className="text-2xl font-semibold">Phone Number : </span>+09876543</p>
            <p className="text-lg"><span className="text-2xl font-semibold">Email : XYZ@gamil.com</span></p>
            </div>
        </section>
    );
};

export default Contact;