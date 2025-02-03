import NewsCard from "@/components/Cards/NewsCard";
import { News } from "@/utils/const";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-darkGreen">
      <section className="container w-full h-[640px] relative">
        <video width="640" height="360" style={{ objectFit: "cover" }} preload="true" controls={false} autoPlay loop muted playsInline poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt463ab493c63a3968/65988e9b14672f52fd6fad1d/Website_Hero_Image_1730x720.jpg" data-testid="hero:video" className='z-10 w-full h-full'>
          <source src="/video/valorant.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-20 absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="flex flex-col gap-[20px] text-white items-center">
            <span>A 5v5 character-based tactical shooter</span>
            <Link href={'#'} > <Image src={'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=300'} alt="valorant" width={300} height={56} /> </Link>
            <div className="border p-[1rem] border-white">
              <Link
                href={"#"}
                className="relative home-playnow text-white font-anton uppercase text-[1rem] py-[10px] px-[45px]"
              >
                Play Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-[50px] container bg-mainGray px-[20px] lg:px-[50px] 2xl:px-[30px] flex flex-col gap-[30px]">
        <div className="flex items-center justify-between uppercase">
          <h1 className="font-bold text-[2rem]">the latest</h1>
          <Link href={'/news'} className="">go to news page</Link>
        </div>
        <div className="w-full overflow-x-auto">
          <ul className="flex justify-between gap-[20px] xl:gap-0">
            {News?.slice(0,3).map((item:any) => {
              return (
                <li key={item?.title}> <NewsCard data={item} /> </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="container bg-center bg-cover w-full h-[640px] px-[20px] lg:px-[50px] 2xl:px-[30px] flex items-center justify-center" style={{
        backgroundImage: 'url("/bg/bg_collision.png")'
      }}>
        <div className="w-full flex items-start">
          <div className="flex flex-col gap-[30px] text-white">
            <h1 className="font-bold uppercase text-[3rem] md:text-[4rem]">COLLISION</h1>
            <p className="uppercase">EPISODE_09 // ACT III / YR 4</p>
            <Link href={'https://playvalorant.com/en-us/console/'} className="block p-[1.5rem] hover:bg-white hover:text-black bg-darkGreen text-white uppercase text-[1rem] w-fit">play now</Link>
          </div>
        </div>
      </section>

      <section className="container bg-mainGray w-full h-full xl:h-[640px] px-[20px] lg:px-[50px] 2xl:px-[30px] flex items-center justify-center py-[30px] xl:py-0">
        <div className="w-full flex flex-col gap-[30px] xl:gap-0 xl:flex-row items-center justify-between">
          <div className="flex flex-col gap-[10px] text-black w-full xl:w-[50%] pr-[30px]">
            <h1 className="font-bold uppercase text-[1.5rem] md:text-[2rem] md:text-[3rem]">WE ARE VALORANT</h1>
            <h2 className="uppercase text-[1rem] md:text-[1rem]">DEFY THE LIMITS</h2>
            <p className="text-[.9rem] md:text-[1rem]">Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you&apos;ll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
            <Link href={`/news/Beginer's Guide`} className="block p-[1.5rem] hover:bg-darkGreen bg-mainRed text-white uppercase text-[1rem] w-fit">learn the game</Link>
          </div>

          <div className="">
            <video width="640" height="360" preload="true" controls={false} autoPlay loop muted playsInline data-testid="hero:video" className="w-full xl:w-[640px]">
              <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="container bg-center bg-cover w-full h-full py-[30px] xl:h-[700px] px-[20px] lg:px-[50px] 2xl:px-[30px] flex items-center justify-center" style={{
        backgroundImage: 'url("/bg/bg_agents.avif")'
      }}>
        <div className="w full flex flex-col xl:flex-row items-center justify-between gap-[20px] md:gap-[30px] xl:gap-0">
          <div className="order-2 xl:order-1 w-[257px] h-[257px] lg:w-full md:w-[600px] md:h-[600px] xl:w-[50%] lg:h-[900px] xl:h-[640px] relative">
            <Image src={'/agents.avif'} alt="agents" objectFit="cover" layout="fill" />
          </div>
          <div className="order-1 xl:order-2 w-full xl:w-[40%] flex flex-col gap-[30px] text-white">
            <h1 className="font-bold uppercase text-[1.5rem] md:text-[2rem] md:text-[3rem]">YOUR AGENTS</h1>
            <h2 className="uppercase text-[1rem] md:text-[1rem]">CREATIVITY IS YOUR GREATEST WEAPON.</h2>
            <p className="text-[.9rem] md:text-[1rem]">More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.</p>
            <Link href={`/agents`} className="block p-[1.5rem] bg-darkGreen hover:bg-white text-white hover:text-black uppercase text-[1rem] w-fit">view all agents</Link>
          </div>
        </div>
      </section>

      <section className="container bg-center bg-cover w-full h-full py-[30px] xl:h-[700px] px-[20px] lg:px-[50px] 2xl:px-[30px] flex items-center justify-center" style={{
        backgroundImage: 'url("/bg/bg_gray.avif")'
      }}>
        <div className="w full flex flex-col xl:flex-row items-center justify-between gap-[20px] md:gap-[30px] xl:gap-0">
          <div className="w-full xl:w-[40%] flex flex-col gap-[30px] text-black">
            <h1 className="font-bold uppercase text-[1.5rem] md:text-[2rem] md:text-[3rem]">YOUR maps</h1>
            <h2 className="uppercase text-[1rem] md:text-[1rem]">FIGHT AROUND THE WORLD</h2>
            <p className="text-[.9rem] md:text-[1rem]">Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come..</p>
            <Link href={`/maps`} className="block p-[1.5rem] bg-mainRed hover:bg-darkGreen text-white uppercase text-[1rem] w-fit">view all maps</Link>
          </div>
          <div className="w-[257px] h-[257px] lg:w-full md:w-[600px] md:h-[600px] xl:w-[50%] lg:h-[900px] xl:h-[640px] relative">
            <Image src={'/img_map.avif'} alt="agents" objectFit="cover" layout="fill" />
          </div>
        </div>
      </section>
    </div>
  );
}
