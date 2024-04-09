'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { Agent, Ability } from '@/app/utils/interfaces'
import Image from 'next/image'
import { getAgentDataFromId, getAllAgentsData } from '@/app/utils/fetchData'

const ScrollAgentText = ({children}:{children:ReactNode}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top } = elementRef.current.getBoundingClientRect();
        if (top <= 100) {
          elementRef.current.style.transform = 'translateY(-50px)';
        } else {
          elementRef.current.style.transform = 'translateY(0)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} style={{ transition: 'transform 0.3s' }} className='flex md:items-center md:justify-center lg:justify-end lg:items-end px-[2rem]'>
      {children}
    </div>
  );
};

const ScrollAgentImage = ({children}:{children:ReactNode}) => {
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} style={{ transition: 'transform 0.3s' }} className='absolute top-[8rem] md:top-[55px] left-0 flex items-center justify-center w-full'>
      {children}
    </div>
  );
};

const AllAgents = () => {
  const [allAgents, setAllAgents] = useState<Agent []>([]);

  const [agentData, setAgentData] = useState<Agent>();
  const [agentId, setAgentId] = useState('');

  const [loading, setLoading] = useState(true);

  const [abilityIdx, setAbilityIdx] = useState(0);

  const handleAgentId = (id:string) => setAgentId(id)
  
  const handleAbilityClick = (idx: number) => {
    setAbilityIdx(idx);
  };

  useEffect(() => {
    const fetchAllAgentData = async () => {
      try {
        const data = await getAllAgentsData();
        setAllAgents(data)

        if (data.length > 0) {
          setAgentData(data[0]);
          setAgentId(data[0].uuid);
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchAllAgentData();
  }, []);

  useEffect(() => {
    const agentDataFromId = async (id:string) => {
      try {
        const data = await getAgentDataFromId(id);
        setAgentData(data);
        setLoading(false); // Set loading to false when image data is loaded
      } catch (error) {
        console.log(error)
      }
    }

    setLoading(true); // Set loading to true when changing agentId
    agentDataFromId(agentId);
  }, [agentId])

  return (      
    <section className='w-[100%]'>
      <div className='relative'>
        <video autoPlay muted loop id="video-bg" className='absolute top-0 left-0 h-[100%] w-[100%]' style={{objectFit: 'cover'}}>
          <source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4" type="video/mp4" />          
        </video>
        <div className="container flex flex-col lg:flex-row items-center justify-between lg:px-[2rem] xl:px-0">
          <div className="z-40 w-[100%] lg:w-[80%] flex lg:flex-col gap-[40px] lg:gap-[10px] h-[400px] md:h-[550px] pt-[1.3rem] md:pb-[5rem] lg:py-[1.3rem] overflow-y-auto hide-scroll px-[2rem] lg:px-0">
            {
              allAgents && allAgents.filter((item:Agent) => item.isPlayableCharacter === true).map((agent:Agent, idx:number) => {
                const id = agent.uuid;

                return (
                  <div className="" key={agent.uuid}>
                    <button onClick={() => handleAgentId(agent.uuid)} className={`z-30 font-anton bg-transparent border-none shadow-none flex gap-[10px] lg:gap-[30px] ${id === agentId ? 'text-darkRed' : 'text-white'}`}>
                    {idx < 9 ? (
                      <span className='tracking-wide md:text-[1.2rem] text-[1rem]'>
                        0{idx+1}
                      </span>
                      ) : (
                      <span className='tracking-wide md:text-[1.2rem] text-[1rem]'>
                        {idx+1}
                      </span>
                      )}
                      <span className='uppercase text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold transition-transform duration-300 hover:translate-x-[40px] tracking-wide'>{agent.displayName}</span>
                    </button>
                  </div>
                )
              })
            }
          </div>

          {loading && <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 opacity-50">Loading...</div>}
          
          {agentData && agentData.displayName && (
            <>
              <ScrollAgentImage>
                <Image
                  className={`${loading ? 'hidden' : ''} z-20`}
                  src={agentData ? agentData.fullPortraitV2 : ''}
                  alt={agentData ? agentData.displayName : ''}
                  width={900}
                  height={700}
                  onLoad={() => setLoading(false)} // Set loading to false when image is successfully loaded
                  onError={() => setLoading(false)} // Set loading to false when image loading fails
                />
              </ScrollAgentImage>
              
              <ScrollAgentText>
                <div className={`${loading ? 'hidden' : ''} z-30 text-white w-[100%] px-0 md:w-[70%] lg:w-[50%]`}>
                  <h1 className='uppercase font-bold tracking-widest text-[2.5rem] font-anton'>{agentData ? agentData?.displayName : ''}</h1>
                  <div className="mb-[20px] md:mb-0">
                    <span className='uppercase text-[16px]'>// Role</span>
                    <div className="flex items-center gap-[10px]">
                      <h3 className='text-[30px] md:text-[60px] uppercase font-anton'>{agentData ? agentData?.role.displayName : ''}</h3>
                      <div className="w-[30px] h-[30px] bg-center bg-cover" style={{
                        backgroundImage: `url("${agentData ? agentData?.role.displayIcon : ''}")`
                      }}></div>
                    </div>
                  </div>
                  <div className="">
                    <span className='uppercase text-[16px]'>// Biografi</span>
                    <p className='text-[16px] mt-[15px]'>{agentData ? agentData?.description : ''}</p>
                  </div>
                </div>
              </ScrollAgentText>
            </>
          )}
        </div>
      </div>
      
      {agentData && (
        <div className="w-full bg-darkGray h-[750px] md:h-[500px] lg:h-[650px] px-[2rem] xl:px-0">
          <div className="container py-[2rem] lg:py-[4rem] flex flex-col md:flex-row justify-between">
            <div className="w-[100%] md:w-[50%]">
              <h1 className='uppercase font-anton text-[4rem] text-black'>abilities</h1>
              {agentData?.abilities && (
                <ul className="flex gap-[30px] items-center">
                  {agentData.abilities.map((item:Ability, idx:number) => {
                    return (
                      <div key={idx}>
                        {item.displayIcon && (
                          <li onClick={() => {
                            handleAbilityClick(idx);
                          }} key={idx} className={`overflow-x-hidden relative hover:cursor-pointer`}>
                            <div className={`absolute top-0 transition-all duration-300 ease-out h-full w-full z-10 ${abilityIdx === idx ?  'bg-black right-0' : 'right-[80px]'}`}></div>
                            <Image className='relative z-30' src={item.displayIcon} alt={item.displayName} width={80} height={80} />
                        </li>
                        )}
                      </div>
                    )
                  })}
                </ul>
              )}
              
              {
                agentData && agentData.abilities ? (
                  <div className="border w-[100%] lg:w-[80%] mt-[2rem] overflow-y-hidden">
                    <div className={`border-black transition-all duration-400 ease-out`}>
                      <h1 className='text-[2rem] font-anton mb-[20px]'>{agentData.abilities[abilityIdx].displayName}</h1>
                      <h3 className='text-gray-700 text-[.7rem] md:text-[1rem]'>{agentData.abilities[abilityIdx].description}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 opacity-50">Loading...</div>
                )
              }
            </div>

            {agentData && (
              <div className="relative mr-[1.5rem] z-10 w-[100%] md:w-[50%] h-[300px]">
                <div className="w-full h-full bg-cover bg-center" style={{
                  backgroundImage: `url("${agentData.background}")`
                }}>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default AllAgents
