'use client'
import React, { useState } from 'react'
import { MinusIcon, PlusIcon } from '@/utils/icons'
import { motion, AnimatePresence } from 'motion/react';
import { pbeDropdown } from '@/utils/const';
import Section from './Section';

const DropdownContent = ({data, index}:{data:any, index:number}) => {
  const [isClick, setIsClick] = useState(false);
  const handleIsClick = () => setIsClick(!isClick);

  return (
    <div className="">
      <button onClick={handleIsClick} className="flex items-center justify-between pb-[10px] border-b border-b-black w-full block text-start">
        <span className='text-[.8rem] md:text-[1rem] font-bold text-black w-[80%] md:w-full'>{data?.title}</span>
        {isClick ? (
          <MinusIcon color='rgb(225, 70, 85)' size={20} classname='' />
        ) : (
          <PlusIcon color='rgb(225, 70, 85)' size={20} classname='' />
        )}
      </button>

      <AnimatePresence>
        {isClick && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full pt-[20px]"
          >
            <Section
              key={index}
              title={''}
              paragraphs={data.paragraphs}
              list={data.list}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Dropdown = ({content}:{content:any}) => {
  
  return (
    <>
      <h1 className='pb-[10px] border-b border-b-black text-[1.5rem] md:text-[2rem] font-bold text-black'>{content?.title}</h1>

      <ul className='flex flex-col gap-[20px]'>
        {content?.sections?.map((item:any, idx:number) => {
          return (
            <li key={idx}>
              <DropdownContent data={item} index={idx}  />
            </li>
          )
        })}
      </ul>
    </>
  )
}

const PbeDropdown = () => {
  
  return (
    <div className='w-full flex flex-col gap-[20px]'>
      {pbeDropdown?.map((item:any, idx:number) => {
        return (
          <Dropdown key={idx} content={item} />
        )
      })}
    </div>
  )
}

export default PbeDropdown