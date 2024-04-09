'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { MapData } from '../utils/interfaces';
import { getAllMapsData, getMapDataFromId } from '../utils/fetchData';

const page = () => {
  const [mapData, setMapData] = useState<MapData>();
  const [mapId, setMapId] = useState('');
  const [allMaps, setAllMaps] = useState<MapData[]>([]);
  const [loading, setLoading] = useState(true);

  const handleMapId = (id:string) => setMapId(id)

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const fetchAllMapData = async () => {
      try {
        const data = await getAllMapsData();
        setAllMaps(data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchAllMapData();
  }, [])

  useEffect(() => {
    const mapDataFromId = async (id:string) => {
      try {
        const data = await getMapDataFromId(id);
        setMapData(data);
        setLoading(false); // Set loading to false when image data is loaded
      } catch (error) {
        console.log(error)
      }
    }

    setLoading(true); // Set loading to true when changing agentId
    mapDataFromId(mapId);
  }, [mapId])

  return (
    <section className='w-full overflow-y-scroll relative bg-lightGray'>
      <div className="container py-[5rem] px-[1rem] md:px-[2rem] xl:px-0 z-40">
        <h1 className='text-black font-anton text-[5rem] tracking-wide mb-[30px] uppercase'>maps</h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col xl:flex xl:flex-row xl:items-center gap-[20px]">
          {
            allMaps.map((map:MapData) => {
              return (
                <button onClick={() => {
                  handleMapId(map.uuid);
                  handleClick();
                }} className={`transition-all duration-500 ease-in-out w-[100%] h-[200px] md:w-[300px] md:h-[300px] bg-darkBrown flex items-center justify-center text-white bg-center bg-cover cursor-pointer hover:-translate-y-[30px]`} style={{
                  backgroundImage: `url("${map.splash}")`
                }} key={map.uuid}></button>
              )
            })
          }
        </div>

        <div className={`fixed overflow-y-scroll left-0 top-[75px] h-[100%] w-[100vw] bg-grayishGreen text-white p-[2rem] transition-all duration-500 ease-in-out ${click ? 'block' : 'hidden'}`}>
          <div className="w-full flex items-ends justify-end">
            <button onClick={handleClick} className='border py-[15px] px-[20px] bg-grayishGreen text-white transition-colors duration-300 ease-in-out hover:bg-black'>X</button>
          </div>

          <div className="flex flex-col overflow-y-auto h-[800px] md:h-[100%] md:flex-row items-center gap-[50px]">
            <div className="w-[100%] md:w-[35%] text-white border-r">
              <h1 className='uppercase text-[2rem] lg:text-[4rem] font-anton'>{mapData?.displayName || 'No Name'}</h1>
              <p className='font-anton w-[80%] mt-[20px] text-[15px] lg:text-[1rem]'>{mapData?.narrativeDescription || 'No Description'}</p>
            </div>

            <Image src={mapData?.splash || '/'} alt={mapData?.displayName || 'map-name'} width={700} height={500} loading='lazy' className='hidden xl:block'/>
            <Image src={mapData?.splash || '/'} alt={mapData?.displayName || 'map-name'} width={600} height={500} loading='lazy' className='hidden lg:block xl:hidden'/>
            <Image src={mapData?.splash || '/'} alt={mapData?.displayName || 'map-name'} width={400} height={500} loading='lazy' className='lg:hidden md:block'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page