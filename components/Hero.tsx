"use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload, FaLocationArrow } from "react-icons/fa6";


import ComputersCanvas from './canvas/Computers';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0"> 
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex flex-col items-center justify-center relative">
            <TextGenerateEffect 
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Transforming Concepts into Seamless User Experiences"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi, I&apos;m Rafid a passionate Web Developer from Bangladesh
            </p>
  
            <section className={`relative w-full h-screen mt-[-250px] mx-auto`}>
                <ComputersCanvas />

                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                    <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                    </a>
                </div>
            </section>

            <div className="flex gap-4">
                <a href="#projects">
                    <MagicButton
                        title="Show my work"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
                <a href="/CV-Rafid.pdf" download>
                    <MagicButton
                        title="Download CV"
                        icon={<FaDownload />}
                        position="right"
                    />
                </a>
            </div> 
        </div>
    </div>
  )
}

export default Hero