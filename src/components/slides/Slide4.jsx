"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Slide4() {
  return (
    <div className="bg-black rounded-2xl shadow-2xl gap-6 text-white flex  flex-col items-center justify-center p-12">
      <h1 className="text-2xl">Step 3: Animation Properties</h1>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        Framer Motion uses several key properties to define animations:
      </motion.p>

      <motion.ul 
         className="text-2xl list-disc space-y-4"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         exit={{ opacity: 0 }}
      >
        <motion.li>
          initial: The initial state of the component before the animation
          starts.
        </motion.li>
        <motion.li>
          animate: The state to which the component will animate.
        </motion.li>
        <motion.li>
          transition: Configuration for the animation, such as duration and
          easing.
        </motion.li>
      </motion.ul>
      <h1 className="text-2xl">Code</h1>
      <Image alt="#" width={300} height={300} src={"/code1.png"}/>
      <h1 className="text-2xl">Demo:</h1>
      <motion.h1
        animate={{ y: 25, color: "black",rotate:360, backgroundColor:"white" }}
        transition={{ duration: 1.5 }}
        className="text-semibold text-xl p-2 rounded-lg"
        initial={{ color: "yellow", rotate:180 }}
        
      >
        Hello BI Team
      </motion.h1>
    </div>
  );
}

export default Slide4;
