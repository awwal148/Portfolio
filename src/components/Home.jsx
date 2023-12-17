import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <section name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-red-500 text-lg'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6fc]'>Awwal Adedotun</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[44rem]'>I’m a full-stack developer with a focus on building and designing responsive web applications that deliver exceptional digital experiences.</p>
            <div className="">
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500'> <Link to="work" smooth={true} duration={500} >
                       View Work
                        </Link><span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-4'/>
                </span></button>
            </div>
        </div>
        </section>
  )
}

export default Home