"use client";
import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import Image from "next/image";

function slide1() {

  return (
    <div className="">
      <div className="bg-black rounded-2xl shadow-2xl text-white gap-16  flex flex-col items-center justify-center p-10">
        
      <AnimatePresence>
        <motion.p className="text-4xl"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.3}}
        exit={{opacity:0}}
        >
     Welcome to our introductory video on Framer Motion
        </motion.p>
        </AnimatePresence >
        <Image src={"/zbd-logo.jpg"} width={200} height={200} alt="Picture of the author"
></Image>
        <h1 className="text-2xl">By Edgar Allan Bonilla Saravia</h1>
      </div>
    </div>
  );
}

export default slide1;
