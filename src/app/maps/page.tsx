import React from 'react'
import MapPage from './MapPage'
import { getAllMaps } from '../../utils/fetcher'

const page = async () => {
  const allMaps = await getAllMaps();
  const Maps = allMaps?.data.filter((value:any, index:any, self:any) =>
    index === self.findIndex((t:any) => (
      t.displayName === value.displayName
    ))
  );

  return (
    <MapPage maps={Maps} />
  )
}

export default page