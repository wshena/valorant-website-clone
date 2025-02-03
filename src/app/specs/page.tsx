import Image from 'next/image'
import React from 'react'

const SpecsTable = () => {
  return (
    <div className="overflow-x-auto w-full 2xl:w-[50%]">
      <table className="w-[683px] md:w-full bg-[#E1DDD8] border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200">Windows: 10 (Build 19041+) or 11 64-bit</th>
            <th className="px-4 py-2 border border-gray-200">RAM</th>
            <th className="px-4 py-2 border border-gray-200">VRAM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-200 font-bold">MINIMUM SPECS / 30 FPS</td>
            <td className="px-4 py-2 border border-gray-200">CPU // Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)</td>
            <td className="px-4 py-2 border border-gray-200">GPU // Intel HD 4000, Radeon R5 200</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200 font-bold">RECOMMENDED SPECS / 60 FPS</td>
            <td className="px-4 py-2 border border-gray-200">CPU // Intel i3-4150 (Intel), Ryzen 3 1200 (AMD)</td>
            <td className="px-4 py-2 border border-gray-200">GPU // Geforce GT 730, Radeon R7 240</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200 font-bold">HIGH-END SPECS / 144+ FPS</td>
            <td className="px-4 py-2 border border-gray-200">CPU // Intel i5-9400F 2.90GHz (Intel), Ryzen 5 2600X (AMD)</td>
            <td className="px-4 py-2 border border-gray-200">GPU // GTX 1050 Ti, Radeon R7 370</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const page = () => {
  return (
    <div className='w-full'>
      <section className='relative w-full h-[400px] flex items-end'>
        <Image
          src={'/bg/bg_specs.avif'}
          alt='background'
          layout='fill'
          objectFit='cover'
          className='z-10'
        />
        <div className="z-20 container px-[10px] md:px-[20px] lg:px-[50px] 2xl:px-0 w-full h-full flex items-end pb-[30px]">
          <h1 className='uppercase text-white font-bold text-[5rem]'>specs</h1>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-mainGray">
        <div className="md:w-full lg:w-[60%] xl:w-[50%] flex flex-col gap-[30px] py-[50px] px-[20px] lg:px-0">
          <h1 className='uppercase font-bold text-[2rem]'>pc specs</h1>
          <div className="w-[275px] md:w-full 2xl:flex 2xl:items-center 2xl:justify-center">
            <SpecsTable />
          </div>
          <span>On Windows 11 we also require &quot;TPM 2.0 and UEFI Secure Boot.&quot;</span>
        </div>
      </section>
    </div>
  )
}

export default page