'use client'
import { useAppDispatch } from '@/redux/hook';
import { toggleHamburger } from '@/redux/Slice/UtilitySlice';
import { ArrowDownIcon, ArrowUpIcon } from '@/utils/icons';
import { DropdownSideNavContentProps } from '@/utils/interface';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react'

const SideLinkDropdown = ({ label, contents }: { label: string, contents: DropdownSideNavContentProps[] }) => {
  const dispatch = useAppDispatch()
  const [isClick, setIsClick] = useState(false);
  const handleIsClick = () => setIsClick(!isClick);

  return (
    <div className="relative">
      <button
        onClick={handleIsClick}
        className='relative uppercase text-[1rem] w-full p-[1rem] hover:bg-bgHover hover:text-mainRed rounded-[10px] flex items-center justify-between'
      >
        <span>{label}</span>
        {isClick ? (
          <ArrowUpIcon size={20} color='#ECE9E4' classname='' />
        ) : (
          <ArrowDownIcon size={20} color='#ECE9E4' classname='' />
        )}
      </button>

      <AnimatePresence>
        {isClick && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full text-mainGray text-[1rem] uppercase overflow-hidden"
          >
            <ul className="flex flex-col gap-[8px]">
              {contents.map((item: DropdownSideNavContentProps) => (
                <li key={item.id}>
                  {(item.label === 'x' || item.label === 'youtube' || item.label === 'tiktok' || item.label === 'instagram' || item.label === 'discord' || item.label === 'facebook') ? (
                    <Link
                      onClick={() => {
                        dispatch(toggleHamburger(false))
                      }}
                      href={item.link}
                      target='blank'
                      className='uppercase text-[1rem] block w-full p-[1rem] hover:bg-bgHover text-gray-300 hover:text-white rounded-[10px]'
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                    {item?.label === 'support' ? (
                      <Link
                      onClick={() => {
                        dispatch(toggleHamburger(false))
                      }}
                      href={item.link}
                      target='blank'
                      className='uppercase text-[1rem] block w-full p-[1rem] hover:bg-bgHover text-gray-300 hover:text-white rounded-[10px]'
                    >
                      {item.label}
                    </Link>
                    ) : (
                      <Link
                        onClick={() => {
                          dispatch(toggleHamburger(false))
                        }}
                        href={item.link}
                        className='uppercase text-[1rem] block w-full p-[1rem] hover:bg-bgHover text-gray-300 hover:text-white rounded-[10px]'
                      >
                        {item.label}
                      </Link>
                    )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideLinkDropdown