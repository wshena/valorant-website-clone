import NewsDetail from '@/components/NewsDetail'
import { News } from '@/utils/const'
import React from 'react'

const page = () => {
  return (
    <NewsDetail data={News[0]} />
  )
}

export default page