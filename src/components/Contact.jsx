import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='w-full  bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/b91cb5f6-ffaa-4bd5-93ba-cdcfff212c7d" method="POST" className='flex flex-col max-w-[600px] w-full]'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form bellow or shootme an email -  myEmail"gmail.com </p>
            </div>
            <input type='text' placeholder='Name' name='name'className='p-2 bg-[#ccd6f6]' />
            <input type='email' placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea name='message' rows='10' className=' bg-[#ccd6f6] p-2'  placeholder='Message'> </textarea>
            <button className='text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center'>Let Collaborate</button>
        </form>
    </section>
  )
}

export default Contact