"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Test() {
  const [flag, setFlag] = useState(false);

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0},
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-700 gap-6">
      <motion.h1
        animate={{ y: -50, color: "white" }}
        transition={{ duration: 0.5 }}
        className="text-semibold text-xl"
        initial={{ color: "yellow" }}
        exit={{color:"white"}}
      >
        Hello BI Team
      </motion.h1>
      <motion.div
        className=" p-20"
        initial={{ backgroundColor: "White" }}
        animate={{
          rotate: 360,
          borderRadius: ["25%", "50%"],
          scale: 1,
          backgroundColor: "yellow",
        }}
        transition={{ duration: 1 }}
      ></motion.div>

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
          initial={{opacity:0}}
          animate={flag ? "open" : "closed"} 
          transition={{duration:0.5}}
          variants={variants}
          >
            In lines of code, a world takes flight, With logic s hand, we weave
            the light. From functions formed, and loops that bind, A symphony of
            thought we find. 
            The language sings, a cryptic tongue, Of variables
            where meaning s hung. With syntax strict, a guiding star, We build
            the dreams that come from far.
          </motion.p>
    </main>
  );
}

export default Test;
