import axios from "axios";

const fecthAllDataWithParams = async (params:string) => {
  try {
    const respones = await axios.get(`${process.env.NEXT_PUBLIC_VALORANT_API}/${params}`)
    return respones.data
  } catch (error) {
    console.log(error)
  }
}

const fetchDataWithParamsAndId = async (params:string, id:string) => {
  try {
    const respones = await axios.get(`${process.env.NEXT_PUBLIC_VALORANT_API}/${params}/${id}`)
    return respones.data
  } catch (error) {
    console.log(error)
  }
}

export const getAllAgentsData = async () => {
  try {
    const data = await fecthAllDataWithParams('agents');
    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const getAgentDataFromId = async (id:string) => {
  try {
    const data = await fetchDataWithParamsAndId('agents', id);
    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const getAllMapsData = async () => {
  try {
    const data = await fecthAllDataWithParams('maps');
    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const getMapDataFromId = async (id:string) => {
  try {
    const data = await fetchDataWithParamsAndId('maps', id);
    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const getAllWeapons = async () => {
  try {
    const data = await fecthAllDataWithParams('weapons');
    return data.data
  } catch (error) {
    console.log(error)
  }
}

export const getWeaponDataFromId = async (id:string) => {
  try {
    const data = await fetchDataWithParamsAndId('weapons', id);
    return data.data
  } catch (error) {
    console.log(error)
  }
}