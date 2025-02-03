import NewsDetail from '@/components/NewsDetail';
import { News } from '@/utils/const';
import React from 'react'

const page = async ({params}:{params:any}) => {
  const newsName = decodeURIComponent((await params)?.name);
  const data = News?.find((item:any) => item?.title == newsName);
  
  return (
    <>
    {data && (
      <NewsDetail data={data} />
    )}
    </>
  )
}

export default page