import React from 'react'

interface SectionProps {
  title: string;
  paragraphs: string[];
  list?: string[];
}

const Section = ({ title, paragraphs, list }: SectionProps) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <h1 className='text-[1.5rem] md:text-[2rem] font-bold text-black'>{title}</h1>
      {paragraphs.map((paragraph, pIndex) => (
        <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
      {list && (
        <ul className='list-disc ml-[50px]'>
          {list.map((item, lIndex) => (
            <li key={lIndex}><span>{item}</span></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Section