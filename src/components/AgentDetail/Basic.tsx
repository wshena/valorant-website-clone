import Image from 'next/image';
import React from 'react'

const Basic = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col font-bold uppercase">
        <h1 className='text-[3rem] lg:text-[5rem] tracking-tight -skew-x-[10deg]'>{data?.displayName}</h1>
        <div className="flex items-center gap-[30px] lg:-mt-[20px]">
          <h2 className='text-[1.5rem] lg:text-[2rem]'>{data?.role?.displayName}</h2>
          <Image src={data?.role?.displayIcon} alt={data?.role?.displayName} width={30} height={30} className='md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]' />
        </div>
      </div>

      <div className="flex flex-col gap-[15px] font-bold">
        <h3 className='text-[1rem] uppercase'>Biography</h3>
        <p className='text-[.8rem] w-[90%] md:full'>{data?.description}</p>
      </div>
    </div>
  );
};

export default Basic