import MediaCard from '@/components/Cards/MediaCard'
import React from 'react'

const mediaCards = Array(12).fill({
  image: '/bg/media/bg_media.avif',
  title: 'Episode 8 Act I Wallpapers',
  date: '6/1/2024'
})

const page = () => {
  return (
    <div className='w-full'>
      <section className="w-full relative pt-[100px] md:pt-[150px] pb-[50px] md:pb-[100px] bg-mainGray flex items-center justify-center">
        <div className="z-10 absolute top-0 left-0 w-full lg:w-[96%] xl:w-[60%] h-full bg-mainRed"></div>
        <div className="z-20 container px-[20px] lg:px-[50px] 2xl:px-0 flex flex-col xl:flex-row gap-[20px] xl:gap-0 xl:items-center xl:justify-between w-full">
          <div className="flex flex-col gap-[20px] w-full xl:w-[50%] text-white">
            <h1 className='font-bold text-[3rem] md:text-[5rem] uppercase'>Media</h1>
            <div className="w-full xl:w-[80%] flex flex-col gap-[20px]">
              <p>Our work is your play. Whether you&apos;re press, a content creator or something in between, if you see it here it&apos;s yours to use.</p>
              <p>Don&apos;t forget, if you create something with these files, tag @VALORANT on social media. We cannot wait to see what you make, just remember to keep in mind our Legal Jibber Jabber.</p>
            </div>
          </div>
          <video width="640" height="360" controls={false} autoPlay loop muted className='md:w-[700px] lg:w-[900px] xl:w-[640px] xl:h-[360px]'>
            <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/82ab63d9255f9fbbea7c13e00cd46b09ff90d25b.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className='w-full bg-mainGray py-[50px]'>
        <div className="container px-[10px] md:px-[20px] lg:px-[50px] 2xl:px-0 flex items-center justify-center">
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]'>
          {mediaCards.map((card, index) => (
            <li key={index}>
              <MediaCard image={card.image} title={card.title} date={card.date} />
            </li>
          ))}
        </ul>
        </div>
      </section>
    </div>
  )
}

export default page