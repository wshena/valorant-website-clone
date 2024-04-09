'use client';
import {ValorantLogo} from '@/app/utils/Icons'
import Link from 'next/link'
import Image from 'next/image'
import { useGlobalState } from './context/globalProvider';
import { useEffect, useRef, useState } from 'react';
import { Agent } from './utils/interfaces';

export default function Home() {
  const { allAgents } = useGlobalState();
  const [agent1, setAgent1] = useState<Agent>();
  const [agent2, setAgent2] = useState<Agent>();
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top } = elementRef.current.getBoundingClientRect();
        if (top <= 100) {
          elementRef.current.style.transform = 'translateY(-30px)';
        } else {
          elementRef.current.style.transform = 'translateY(0)';
        }
      }
    };

    while (randomAgent2 === randomAgent1) {
      randomAgent2 = Math.floor(Math.random() * allAgents.length)
    }
  
    setAgent1(allAgents[randomAgent1]);
    setAgent2(allAgents[randomAgent2]);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let randomAgent1 = Math.floor(Math.random() * allAgents.length)
  let randomAgent2 = Math.floor(Math.random() * allAgents.length)

  return (
    <main className="w-full overflow-x-hidden bg-lightGray">
      <section className="relative w-[100vw] h-[100vh] flex items-center justify-center bg-darkBrown">
        <div className="absolute top-0 left-0 h-[100%] w-full z-10">
          <video muted autoPlay style={{objectFit: 'cover'}} className='w-[100%] h-[100%]' preload="true" loop playsInline poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt463ab493c63a3968/65988e9b14672f52fd6fad1d/Website_Hero_Image_1730x720.jpg" data-testid="hero:video"><source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce292b05bc900c63/659c99223ea361883557812f/VALORANT_EP8124_001_R007_InGameHomepage_v01_For_Website_Mobile_v2.mp4" type="video/mp4" /></video>
        </div>

        <div className="z-40 text-white flex flex-col items-center gap-[30px]">
          <h3 className='font-anton tracking-wide text-[12px] md:text-[1rem]'>Game tembak-menembak taktis berbasis karakter 5v5</h3>
          <ValorantLogo />
          <div className="border p-[1rem] border-white">
            <Link href={'#'} className='relative home-playnow text-white font-anton uppercase text-[1rem] py-[10px] px-[45px]'>Play Now</Link>
          </div>
        </div>
      </section>

      <section className='w-full py-[3rem] bg-lightRed text-white h-[860px]'>
        <div ref={elementRef} style={{ transition: 'transform 0.3s' }} className="container flex items-center justify-end relative">
          <div className="absolute top-0 left-0 w-full h-[800px] lg:h-full bg-center bg-cover bg-opacity-50 z-10" style={{
            backgroundImage: 'url("/partikel2.png")'
          }}></div>
          {(agent1 && agent2) && (
            <>
              <Image src={agent1.fullPortrait} alt={agent1.displayName} width={900} height={600} className='z-30 absolute top-[300px] lg:-top-[40px] -left-[50px] lg:-left-[200px] hidden lg:block' />
              <Image src={agent2.fullPortrait} alt={agent2.displayName} width={900} height={600} className='z-30 absolute top-[300px] lg:-top-[40px] left-[100px] lg:-left-[0px] hidden lg:block' />
              <Image src={agent1.fullPortrait} alt={agent1.displayName} width={700} height={600} className='z-30 absolute top-[300px] -left-[40px] hidden md:block lg:hidden' />
              <Image src={agent2.fullPortrait} alt={agent2.displayName} width={700} height={600} className='z-30 absolute top-[300px] left-[100px] hidden md:block lg:hidden' />
              <Image src={agent1.fullPortrait} alt={agent1.displayName} width={900} height={600} className='z-30 absolute top-[400px] -left-[40px] block md:hidden' />
              <Image src={agent2.fullPortrait} alt={agent2.displayName} width={900} height={600} className='z-30 absolute top-[400px] left-[60px] block md:hidden' />
            </>
          )}
          
          <div className="z-30 w-full lg:h-[800px] flex lg:items-center justify-start lg:justify-end">
            <div className="px-[1rem] md:px-[3rem] lg:px-0 w-[100%] lg:w-[30%] flex flex-col gap-[20px] lg:gap-[30px] lg:mr-[100px]">
              <h1 className='text-[3rem] md:text-[4rem] lg:text-[5rem] uppercase font-anton'>Agent</h1>
              <h2 className='text-[1.3rem] md:text-[2rem] uppercase font-anton'>Creativity is your best weapon</h2>
              <p className='text-[.9rem] md:text-[1rem] font-anton'>Lebih dari sekadar senjata dan peluru, kamu akan memilih Agen bersenjatakan kemampuan yang adaptif, tangkas, dan mematikan untuk membuktikan keahlian menembakmu. Sejalan dengan berbedanya kepiawaian dalam menembak, begitu pula di sini; tak akan ada Agen dengan karakteristik sama.</p>

              <div className="flex items-center justify-center">
                <div className="border p-[1rem] border-white">
                  <Link href={'/agents'} className='transition-colors duration-300 ease-in-out text-black font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-white hover:bg-black hover:text-white'>see all agent</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='relative w-full bg-lightGray mt-[50px] md:mt-[100px] lg:pt-0 flex flex-col lg:flex-row items-center lg:justify-end'>
        {/* Mobile */}
        <div className="font-anton flex lg:hidden flex-col gap-[20px] w-[100%] md:w-[80%] px-[1rem]">
          <h1 className='text-black text-[5rem] lg:text-[6rem] uppercase'>map</h1>
          <h3 className='text-[1.3rem]'>BERTEMPUR DI SELURUH BELAHAN DUNIA</h3>
          <p className=''>
            <span>Tiap peta adalah panggung tersendiri untuk memamerkan kemampuan berpikir kreatifmu. Semua dirancang sesuai untuk strategi tim, laga spektakuler, dan momen sengit. Perlihatkan kepiawaian yang akan ditiru oleh pemain lain sampai bertahun-tahun mendatang.</span>
          </p>
          <div className="md:w-[60%]">
            <Link href={'/maps'} className='transition-colors duration-300 ease-in-out text-white font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-lightRed hover:bg-black'>see all map</Link>
          </div>
        </div>
        {/* Mobile */}

        <div className="hidden absolute top-0 left-[80px] xl:left-[100px] w-[40%] xl:w-[30%] font-anton px-[2rem] lg:px-0 h-[100%] tracking-wide lg:flex items-center justify-center">
          <div className="flex flex-col gap-[30px]">
            <h1 className='text-black text-[6rem] uppercase'>map</h1>
            <h3 className='text-[1.3rem]'>BERTEMPUR DI SELURUH BELAHAN DUNIA</h3>
            <p className=''>
              <span>Tiap peta adalah panggung tersendiri untuk memamerkan kemampuan berpikir kreatifmu. Semua dirancang sesuai untuk strategi tim, laga spektakuler, dan momen sengit. Perlihatkan kepiawaian yang akan ditiru oleh pemain lain sampai bertahun-tahun mendatang.</span>
            </p>
            <div className="w-[60%]">
              <Link href={'/maps'} className='transition-colors duration-300 ease-in-out text-white font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-lightRed hover:bg-black'>see all map</Link>
            </div>
          </div>
        </div>
        
        <Image src={'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png'} width={900} height={600} alt='map-bg' className='flex justify-end'/>
      </section>
    </main>
  );
}
