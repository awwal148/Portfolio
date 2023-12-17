import React from 'react'

import react from '../assets/react.png'
import firebase from '../assets/firebase.png'
import tailwind from '../assets/tailwind.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import gitHub from '../assets/github.png'
import javaScript from '../assets/javascript.png'
import csharp from '../assets/csharp.svg'


const Skills = () => {
  return (
    <section name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className="max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="">
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>Skills</p>
                <p className='py-4'>This are the technologies i’ve worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='HTML icon'/>
                    <p className='my-4'>HTML</p>               
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='css icon'/>
                    <p className='my-4'>CSS</p>               
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javaScript} alt='react icon'/>
                    <p className='my-4'>javaScript</p>               
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt='react icon'/>
                    <p className='my-4'>ReactJS</p>               
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={gitHub} alt='github icon'/>
                    <p className='my-4'>GitHub</p>               
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt='tailwind icon'/>
                    <p className='my-4'>Tailwind CSS</p>               
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={firebase} alt='firebase icon'/>
                    <p className='my-4'>Firebase</p>               
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={csharp} alt='Csharp icon'/>
                    <p className='my-4'>C Sharp</p>               
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Skills