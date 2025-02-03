'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Basic from './Basic';
import Abilities from './Abilities';

const AgentBasicDetail = ({ data }: { data: any }) => {
  const infos = [<Basic data={data} key={0} />, <Abilities key={1} data={data?.abilities} />];
  const [index, setIndex] = useState(0);
  const handlePrev = () => setIndex(0);
  const handleNext = () => setIndex(1);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col h-[350px] md:h-[380px] lg:h-[450px]">
      <div className='relative w-full overflow-hidden flex items-center' style={{ height: '100%', width: '100%' }}>
        <AnimatePresence custom={index}>
          <motion.div
            key={index}
            custom={index}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{
              x: { type: 'spring' },
              opacity: { duration: 0.2, stiffness: 100, damping: 10 },
            }}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          >
            {infos[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    
      <div className="flex w-fit md:w-full h-[20px] md:h-[50px] items-start md:items-center md:justify-center">
        <div className="flex items-center gap-[10px]">
          <button onClick={handlePrev} className='w-full h-[40px]'>
            <span className={`block w-[90px] h-[5px] rounded-[5px] bg-darkGreen ${index === 0 && 'bg-white'}`}></span>
          </button>
          <button onClick={handleNext} className='w-full h-[40px]'>
            <span className={`block w-[90px] h-[5px] rounded-[5px] bg-darkGreen ${index === 1 && 'bg-white'}`}></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgentBasicDetail