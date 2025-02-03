import { pbeContent } from '@/utils/const';
import React from 'react'
import Section from './Section';

const PbeBasicInfo = () => {
  return (
    <div className='w-full flex flex-col gap-[20px]'>
      {pbeContent.sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          paragraphs={section.paragraphs}
          list={section.list}
        />
      ))}
    </div>
  );
};

export default PbeBasicInfo