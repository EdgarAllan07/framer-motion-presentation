"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function Slide2() {
  return (
    <div className="bg-black rounded-2xl shadow-2xl text-white flex  flex-col items-center justify-center p-10 gap-6">
      <h1 className="text-2xl">Step 1: Installation</h1>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        1. Install Framer Motion First, you need to have npm or yarn for this
        action. 
      
      </motion.p>
      <Image src={"/install.png"} width={700} height={200} alt="#"></Image>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        
      2. Import the motion Object In your React component, import the
        motion object from Framer Motion:
      
      </motion.p>
      <Image src={"/import.png"} width={700} height={200} alt="#"></Image>
    </div>
  );
}

export default Slide2;
