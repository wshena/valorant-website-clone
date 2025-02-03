import { pbeContent } from '@/utils/const';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Section from './pbe/Section';
import { InterfaceProps } from '@/utils/interface';
import NewsCarousel from './NewsCarousel';

const NewsDetail = ({data}:{data:InterfaceProps}) => {
  return (
    <div className='w-full'>
      <section className="w-full h-[200px] md:h-[500px] relative" style={{
        backgroundColor: 'rgb(15, 25, 35)'
      }}>
        <Image 
          src={data?.image}
          alt='news-image'
          layout='fill'
          objectFit='cover'
          className='z-10 md:blur-[10px]'
        />
        <div className="z-20 absolute top-[100px] left-0 w-full h-[130%] flex items-center justify-center">
          <div className="md:w-[500px] md:h-[500px] lg:w-[800px] xl:w-[1000px] lg:h-[600px] relative">
            <Image 
              src={data?.image}
              alt='news-image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </section>

      <section className='w-full pt-[50px] md:pt-[200px] lg:pt-[300px] pb-[100px] bg-mainGray'>
        <div className="container px-[10px] md:px-[20px] lg:px-[50px] 2xl:px-0 flex flex-col gap-[50px]">
          <div className="text-center flex flex-col gap-[10px]">
            <h1 className='uppercase font-bold text-[1.5rem] md:text-[2.7rem] tracking-tight'>{data?.title}</h1>
            <h2>{data?.description}</h2>
            <span className='block w-full h-[3px] border border-mediumGray'></span>
            <div className="w-full flex items-center justify-center">
              <div className="flex items-center gap-[5px] text-[13px]">
                <Link href={'#'}>
                  <span className='text-mainRed'>{data?.type}</span>
                </Link>
                <span className='block bg-mediumGray w-[2px] h-[10px]'></span>
                <span>{data?.date}</span>
              </div>
            </div>
          </div>

          <div className="px-[20px] md:px-0">
            <div className="flex items-center justify-center">
              <div className='w-full lg:w-[70%] flex flex-col gap-[20px]'>
                {pbeContent.sections.map((section, index) => (
                  <Section
                    key={index}
                    title={section.title}
                    paragraphs={section.paragraphs}
                    list={section.list}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className='w-full lg:w-[70%] flex flex-col gap-[20px]'>
                {pbeContent.sections.map((section, index) => (
                  <Section
                    key={index}
                    title={section.title}
                    paragraphs={section.paragraphs}
                    list={section.list}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className='w-full lg:w-[70%] flex flex-col gap-[20px]'>
                {pbeContent.sections.map((section, index) => (
                  <Section
                    key={index}
                    title={section.title}
                    paragraphs={section.paragraphs}
                    list={section.list}
                  />
                ))}
              </div>
            </div>

          </div>

          <NewsCarousel />
        </div>
      </section>
    </div>
  )
}

export default NewsDetail