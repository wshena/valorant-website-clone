'use client'
import Image from 'next/image'
import React from 'react'
import { motion, useInView } from 'framer-motion';

// Variants untuk animasi
const mapVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Map = ({ data }: { data: any }) => {
  // Gunakan useInView untuk mendeteksi kapan komponen masuk ke viewport
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // `once: true` agar animasi hanya terjadi sekali

  return (
    <motion.div
      ref={ref}
      variants={mapVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col gap-[20px]"
    >
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[3rem] font-bold uppercase">{data?.displayName}</h1>
        <p className="text-[.9rem] md:text-[1rem] w-full lg:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit id, eos beatae accusamus recusandae deleniti eaque ex unde. Non.
        </p>
        <Image src={data?.listViewIcon} alt={data?.displayName} width={400} height={100} className="" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-[30px]">
        <div className="relative w-full md:w-[50%] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
          <Image
            src={data?.displayIcon || '/placeholder.png'}
            alt={data?.displayName}
            layout="fill"
            objectFit="cover"
            quality={75}
            loading="lazy"
          />
        </div>
        <div className="relative w-full md:w-[50%] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
          <Image
            src={data?.splash || '/placeholder.png'}
            alt={data?.displayName}
            layout="fill"
            objectFit="cover"
            quality={75}
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

const MapPage = ({maps}:{maps:any}) => {
  return (
    <div className='w-full bg-mainGray'>
      <section className='py-[100px] container w-full px-[20px] md:px-[50px] flex flex-col gap-[40px]'>
        <h1 className='uppercase text-[4rem] font-bold text-black'>maps</h1>
        <ul className='flex flex-col gap-[30px]'>
          {maps?.map((item:any) => {
            return (
              <li key={item?.uuid}>
                <Map data={item} />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default MapPage