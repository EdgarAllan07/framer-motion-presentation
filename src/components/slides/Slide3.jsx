"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

function Slid3() {
  return (
    <div className="bg-black rounded-2xl shadow-2xl text-white flex  flex-col items-center justify-center p-10 gap-6">
     <h1 className="text-2xl">Step 2: Tags</h1>
      <motion.p className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
       To animate an HTML element, simply replace it with the corresponding motion component. For example, to animate a div, you would use motion.div:
      </motion.p>
      <Image alt="#" width={900} height={500} src={"/react-component.png"}/>
    </div>
  )
}

export default Slid3
