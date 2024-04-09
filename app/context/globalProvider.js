'use client';
import React, { createContext, useContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allAgents, setAllAgents] = useState([]);
  const [agentData, setAgentData] = useState();
  const [agentId, setAgentId] = useState('');

  const [menuClick, setMenuClick] = useState(false)
  const [loading, setLoading] = useState(true);
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

  return (
    <GlobalContext.Provider value={{
      loading, setLoading, menuClick, openMenu, closeMenu, allAgents, agentData, agentId
    }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdateState = () => useContext(GlobalUpdateContext);