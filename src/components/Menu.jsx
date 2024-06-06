"use client";
import React, { useState } from "react";
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3"
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide6 from "@/components/slides/Slide6"
import Slide7 from "@/components/slides/Slide7"
import Slide8 from "@/components/slides/Slide8"

import { motion, AnimatePresence } from "framer-motion";

function Menu() {
  const [count, setCount] = useState(0);

  const slides = [<Slide1 key="slide1" />, <Slide2 key="slide2" />,<Slide3 key="slide3" />,<Slide4 key="slide4" />,<Slide5 key="slide5" />,<Slide6 key="slide6" />,<Slide7 key="slide7" />,<Slide8 key="slide8" />];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20 bg-slate-700 gap-6">
      <div className="flex-grow flex items-center justify-center">
       
          <motion.div
            key={count}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, 
              
            }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            {slides[count]}
          </motion.div>
        
      </div>
      <div className="flex gap-4">
        {count > 0 && (
          <motion.button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 bg-transparent"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setCount((prevCount) => (prevCount - 1) % slides.length)}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Before Slide
            </span>
          </motion.button>
        )}
      {
        count < 7 && (
          <motion.button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 bg-transparent"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setCount((prevCount) => (prevCount + 1) % slides.length)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Next Slide
          </span>
        </motion.button>
        )
      }
      </div>
    </div>
  );
}

export default Menu;
