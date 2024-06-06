"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Slide5() {
  const [flag, setFlag] = useState(false);

  const variants = {
    open: { opacity: 1,color:"white" },
    closed: {  color:"Red"},
  };

  return (
    <div className="bg-black rounded-2xl shadow-2xl gap-6 text-white flex  flex-col items-center justify-center p-12">
      <h1 className="text-2xl">Step 4: Hover and Tap Animations</h1>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        You can also animate components in response to user interactions like
        hover and tap:
      </motion.p>
      <motion.ul 
         className="text-2xl list-disc space-y-4"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         exit={{ opacity: 0 }}
      >
        <motion.li>
        whileHover= scale: 1.1 : Scales up the component slightly when hovered.
        </motion.li>
        <motion.li>
        whileTap= scale: 0.9 : Scales down the component slightly when tapped.
        </motion.li>
        
      </motion.ul>
      <Image alt="#" width={600} height={300} src={"/code2.png"}/>
      <motion.button
        className="text-white bg-blue-700  rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Press me
      </motion.button>
      <motion.p
        initial={{ opacity: 0 ,color:"white"}}
        animate={flag ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        In lines of code, a world takes flight, With logic s hand, we weave the
        light. From functions formed, and loops that bind, A symphony of thought
        we find. The language sings, a cryptic tongue, Of variables where
        meaning s hung. With syntax strict, a guiding star, We build the dreams
        that come from far.
      </motion.p>
    </div>
  );
}

export default Slide5;
