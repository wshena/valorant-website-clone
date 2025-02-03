import Image from 'next/image';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Abilities = ({data}:{data:any}) => {
  const agentAbilities = data?.filter((item:any) => item?.slot !== 'Passive');
  const [index, setIndex] = useState(0);
  const handleIndex = (idx:number) => setIndex(idx);
  
  return (
    <div className="flex flex-col gap-[15px]">
      <h1 className='uppercase text-[2rem] lg:text-[3rem] font-bold tracking-tight'>Abilities</h1>
      <ul className='flex items-center gap-[15px]'>
        {agentAbilities?.map((item:any, idx:number) => {
          return (
            <li key={idx}>
              <button onClick={() => handleIndex(idx)} className={`border-b-[3px] pb-[10px] transition-all duration-300 ease-in-out ${idx === index ? 'border-b-mainRed' : 'border-transparent'}`}>
                <Image src={item?.displayIcon} alt={item?.displayName} width={50} height={50} className='' />
              </button>
            </li>
          )
        })}
      </ul>
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='h-[200px]'
        >
          <h2 className='text-[1rem] lg:text-[2rem] font-bold uppercase'>{agentAbilities[index]?.displayName}</h2>
          <p className='text-[.8rem] w-[90%] md:full lg:text-[1rem]'>{agentAbilities[index]?.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Abilities