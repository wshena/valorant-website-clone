import React from 'react'
import AgentsPage from './AgentsPage'
import { getAllAgents } from '../../utils/fetcher'

const page = async () => {
  const allAgents = await getAllAgents()

  return (
    <AgentsPage agents={allAgents?.data} />
  )
}

export default page