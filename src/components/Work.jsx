import React from 'react'
import blinkImg from '../assets/blinkshoe.jpeg'
import foodStore from '../assets/HealthyVibes.jpeg'
import Portfolio from '../assets/Portfolio.jpeg'


const Work = () => {
  return (
    <section name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-500 text-gray-300 mt-3'>Work</p>
          <p className='py-6'>Check some of my recent work</p>
        </div>
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage: `url(${Portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Portfolio Website
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                   <a href='https://github.com/awwal148/Portfolio' target='_blank' rel="noreferrer noopener">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                  </a>
                </div>
              </div>
            </div>
          <div style={{backgroundImage: `url(${blinkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl flex flex-col justify-center items-center font-bold text-white tracking-wider'>
                  Blink Shoes
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://blinkshoe.netlify.app' target='_blank' rel="noreferrer noopener" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                   <a href='https://github.com/awwal148/Blink' target='_blank' rel="noreferrer noopener">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: `url(${foodStore})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Reactjs Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://healthyvibez.netlify.app' target='_blank' rel="noreferrer noopener">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                   <a href='https://github.com/awwal148/HealthyVibesResturant' target='_blank' rel="noreferrer noopener">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div style={{backgroundImage: `url(${blinkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Reactjs Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                   <a href=''>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div style={{backgroundImage: `url(${blinkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Reactjs Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                   <a href=''>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div style={{backgroundImage: `url(${blinkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Reactjs Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                   <a href=''>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                  </a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
    </section>
  )
}

export default Work