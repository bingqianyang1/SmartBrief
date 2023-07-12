import React from 'react'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center flex-col mb-10 pt-5'>
        <img src={logo} alt="SmartBrief" className="w-28 object-contain"/>
      </nav>

      <h1 className='head_text'>
        Effortlessly Summarize Articles with <br className='max-md:hidden'/><span className='purple_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      SmartBrief, Your Ultimate Article Summarization Companion. Get AI-powered summaries for effortless reading. Save time, access anywhere. Try it now!

      </h2>

    </header>
  )
}

export default Hero