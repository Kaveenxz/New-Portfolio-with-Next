import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Footer = () => {
  return (
    <footer className='w-full max-md:mb-[100px] pb-10' id="contact">


        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-2-[45vw]'>
                Redy to take <span className='text-purple'>your</span> digital presence to the next lavel?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>React out me today and let's discuss how I can help you archive your goals.</p>
            <a href="kaveenhansithx@gmail.com">
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024 Kaveen Hansith</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                        <img src={profile.img} alt={profile.img} width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer