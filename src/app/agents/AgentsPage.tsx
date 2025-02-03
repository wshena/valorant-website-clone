import React from 'react'
import AgentCard from '../../components/Cards/AgentCard'

const AgentsPage = ({agents}:{agents:any}) => {
  return (
    <div className='w-full' style={{
      backgroundImage: 'url("/bg/bg_agents.avif")',
      backgroundRepeat: 'repeat-y'
    }}>
      <section className="w-full container relative py-[100px] text-white flex flex-col gap-[20px] md:gap-[30px] px-[10px] md:px-[20px] lg:px-[50px] 2xl:px-0">
        <h1 className='uppercase font-bold text-[4rem] md:text-[5rem] tracking-tight'>Agents</h1>
        <div className="w-full flex items-center justify-center">
          <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[10px]'>
            {agents?.map((item:any) => {
              return (
                <li key={item?.uuid}><AgentCard agent={item} /></li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AgentsPage