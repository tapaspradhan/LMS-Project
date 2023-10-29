import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import aboutMainImage from '../Assets/Images/aboutMainImage.png'
import apj from '../Assets/Images/apj.png'
import billGates from '../Assets/Images/billGates.png'
import einstein from '../Assets/Images/einstein.png'
import nelsonMandela from '../Assets/Images/nelsonMandela.png'
import steveJobs from '../Assets/Images/steveJobs.png'

function AboutUs() {
  return (
    <HomeLayout>
        <div className="pl-20 pt-20 flex flex-col text-white">
            <div className='flex items-center gap-5 mx-10'>
                <section className='w-1/2 space-y-10'>
                    <h1 className='text-5xl text-yellow-500 font-semibold'>
                        Affordable and Quality Education
                    </h1>
                    <p className='text-xl text-gray-200'>
                        Our gole is to provide the affordable and quality education to the world.
                        We are providing the platform for the aspiring teachers and student to share
                        their skills, creativity and knowledge to each other to empower and contribute
                        in the growth and wellness of mankind.
                    </p>
                </section>

                <div className='w-1/2'>
                    <img
                        id="test1"
                        style={{
                            filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                        }}
                        className='drop-shadow-2xl'
                        src={aboutMainImage}
                        alt="about main image" />
                </div>
            </div>
            {/* carousel */}
            <div className="carousel  w-1/2 my-16 m-auto ">
                <div id="slide1" className=" carousel-item relative w-full">
                    <div className=' flex flex-col justify-center items-center gap-4 px-[15%]'>
                        <img src={nelsonMandela} className=" w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                            {"Education is the most powerfull tool you can use to change the world."}
                        </p>
                        <h3 className="text-2xl text-sebibold">Nelson Mandela</h3>
                        <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className=' flex flex-col justify-center items-center gap-4 px-[15%]'>
                        <img src={apj} className="w-40 rounded-full border-2 border-gray-200" />
                        <p className="text-xl text-gray-200">
                            {"You have to dream before your dreams can come true."}
                        </p>
                        <h3 className="text-2xl text-sebibold">APJ Abdul Kalam</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <div className=' flex flex-col justify-center items-center gap-4 px-[15%]'>
                        <img src={einstein} className="w-40 rounded-full border-2 border-gray-200" />
                        <p className="text-xl text-gray-200">
                            {"Learn from yesterday, live for today, hope for tomorrow."}
                        </p>
                        <h3 className="text-2xl text-sebibold">Albert Einstein</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <div className=' flex flex-col justify-center items-center gap-4 px-[15%]'>
                        <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-200" />
                        <p className="text-xl text-gray-200">
                            {"Creativity is just connecting things."}
                        </p>
                        <h3 className="text-2xl text-sebibold">Steve Jobs</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className=' flex flex-col justify-center items-center gap-4 px-[15%]'>
                        <img src={billGates} className="w-40 rounded-full border-2 border-gray-200" />
                        <p className="text-xl text-gray-200">
                            {"The belief that the world is getting worse, that we can't solve extreme poverty and disease, isn't just mistaken."}
                        </p>
                        <h3 className="text-2xl text-sebibold">Bill Gates</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </HomeLayout>
  )
}

export default AboutUs