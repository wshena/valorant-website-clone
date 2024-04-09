'use client';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAllAgentsData, getAgentDataFromId, getAllMapsData, getMapDataFromId, getAllWeapons } from '@/app/utils/fetchData'

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allAgents, setAllAgents] = useState([]);
  const [allMaps, setAllMaps] = useState([]);

  const [agentData, setAgentData] = useState();
  const [agentId, setAgentId] = useState('');

  const [mapData, setMapData] = useState();
  const [mapId, setMapId] = useState('');

  const [allWeapon, setAllWeapon] = useState([]);

  const [menuClick, setMenuClick] = useState(false)

  const [loading, setLoading] = useState(true);

  const handleAgentId = (id) => setAgentId(id)
  const handleMapId = (id) => setMapId(id)

  const openMenu = () => setMenuClick(true);
  const closeMenu = () => setMenuClick(false);

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
    const fetchAllWeaponData = async () => {
      try {
        const data = await getAllWeapons();
        setAllWeapon(data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchAllWeaponData();
  }, [])

  useEffect(() => {
    const agentDataFromId = async (id) => {
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

  useEffect(() => {
    const mapDataFromId = async (id) => {
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
    <GlobalContext.Provider value={{
      allAgents, agentData, agentId, allMaps, mapData, mapId, handleAgentId, handleMapId, loading, setLoading, menuClick, openMenu, closeMenu, allWeapon
    }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdateState = () => useContext(GlobalUpdateContext);