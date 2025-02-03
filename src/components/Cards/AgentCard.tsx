'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AgentCard = ({ agent }: { agent: any }) => {
  const agentId = agent?.uuid;
  const agentName = agent?.displayName;
  const fullPortrait = agent?.fullPortrait;
  const abilities = agent?.abilities;

  return (
    <Link href={`/agents/${agentId}`} className='block'>
      <motion.div
        className='relative block w-[128px] md:w-[200px] h-[400px] bg-darkGreen rounded-[5px] overflow-hidden'
        whileHover={{ rotate: 2 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={fullPortrait || '/placeholder.png'}
            alt={agentName}
            layout='fill'
            objectFit='cover'
            quality={75}
            loading='lazy'
          />
        </div>

        <div className="absolute bottom-0 right-0 h-fit bg-bgHover p-[1rem]">
          <ul className="flex items-center gap-[15px]">
            {abilities?.map((item: any) => {
              return (
                <li key={`${item.slot} - ${item?.displayName}`}>
                  <Image
                    src={item?.displayIcon || '/placeholder.png'}
                    alt={item?.displayName}
                    width={20}
                    height={20}
                    placeholder='blur'
                    blurDataURL='/placeholder.png'
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="absolute top-0 left-0 w-[20%] h-[30%]">
          <h1 className='text-[3rem] uppercase font-bold transform rotate-[90deg]'>{agentName}</h1>
        </div>
      </motion.div>
    </Link>
  );
};

export default AgentCard;
