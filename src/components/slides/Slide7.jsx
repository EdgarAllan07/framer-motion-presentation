"use client"
import React from 'react'
import { motion } from "framer-motion";

function Slide7() {
  return (
    <div className="bg-black rounded-2xl shadow-2xl text-white flex gap-6  flex-col items-center justify-center p-10">
       <h1 className="text-2xl">Step 6: lets Make a test  </h1>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
      This is a test using a mix of most the properties in Framer Motion.
      </motion.p>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
     Drag this ball across the entire screen.
      </motion.p>
      <motion.div
        className=" p-20"
        initial={{ backgroundColor: "White" }}
        drag
        
        whileHover={{
          rotate: 180,
          borderRadius: ["0%","15%", "30%","50%","75%"],
          scale: 1.5,
          backgroundColor: "yellow",
          
        }}
        transition={{ duration: 1,delay:0.2 }}
        
      ></motion.div>
    </div>
  )
}

export default Slide7
