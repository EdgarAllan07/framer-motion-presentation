"use client"
import React from 'react'
import { motion } from "framer-motion";

function Slide6() {
  return (
    <div className="bg-black rounded-2xl shadow-2xl text-white flex gap-6  flex-col items-center justify-center p-10">
 <h1 className="text-2xl">Step 5: List of Properties </h1>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
       You can also use this list of properties in different tags when you are using Framer Motion
      </motion.p>
      <motion.ul 
         className="text-2xl list-disc space-y-4"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         exit={{ opacity: 0 }}
      >
        <motion.li>
        backgroundColor: Changes the background color of the component.
        </motion.li>
        <motion.li>
        color: Changes the text color of the compone
        </motion.li>
        <motion.li>
        width: Changes the width of the component.
        </motion.li>
        <motion.li>
        height: Changes the height of the component.
        </motion.li>
        <motion.li>
        duration: The duration of the animation.
        </motion.li>
        <motion.li>
        delay: The delay before the animation starts.
        </motion.li>
        <motion.li>
        rotate: rotates any component depends on degree you settle.
        </motion.li>
      </motion.ul>
        </div>
  )
}

export default Slide6
