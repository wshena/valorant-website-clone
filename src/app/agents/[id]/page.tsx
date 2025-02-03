import AgentDetail from '@/components/AgentDetail/AgentDetail';
import { getAgentData } from '@/utils/fetcher';
import { hexToRgba } from '@/utils/function';
import React from 'react'

const page = async ({params}:{params:{id:string, name:string}}) => {
  const {id} = await params;
  const agentData = await getAgentData(id);
  const bgGradientColor = agentData?.data?.backgroundGradientColors;
  
  const gradientColors = bgGradientColor.map((hex:any) => hexToRgba(hex));
  const gradientString = `${gradientColors[2]}`

  return (
    <div className='pt-[100px] pb-[50px] text-white' style={{
      background: `${gradientString}`
    }}>
      <div className="container flex items-center justify-center 2xl:h-[100dvh]">
        <AgentDetail agent={agentData?.data} />
      </div>
    </div>
  )
}

export default page