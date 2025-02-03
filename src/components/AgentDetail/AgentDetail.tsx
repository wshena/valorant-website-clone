import Image from 'next/image'
import React from 'react'
import AgentBasicDetail from './AgentBasicDetail';

const AgentDetail = ({agent}:{agent:any}) => {
  return (
    <section className='flex flex-col gap-[20px] md:gap-0 md:flex-row md:items-center justify-between w-full xl:w-[80dvw]'>
      <div className="order-2 md:order-1 w-full h-full ml-[20px] md:w-[50%] md:pl-[50px]">
        <AgentBasicDetail data={agent} />
      </div>

      <div className="order-1 md:order-2 relative w-full h-[300px]  md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
        <Image 
          src={agent?.background}
          alt='bg'
          layout='fill'
          quality={75}
          loading='lazy'
        />

        <div className="absolute top-0 left-0 w-full h-full">
          <Image 
            src={agent?.fullPortrait || agent?.fullPortraitV2}
            alt='bg'
            width={600}
            height={600}
            layout='responsive'
            quality={75}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

export default AgentDetail