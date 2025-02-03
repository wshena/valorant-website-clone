
export async function getAllAgents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/agents?language=en-US&isPlayableCharacter=true`, {
    cache: 'force-cache',
    next: { revalidate: 100 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getAgentData(uuid:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/agents/${uuid}?language=en-US&isPlayableCharacter=true`, {
    cache: 'force-cache',
    next: { revalidate: 100 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getAllWeapons() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/weapons?language=en-US`, {
    cache: 'force-cache',
    next: { revalidate: 100 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getAllMaps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/maps?language=en-US`, {
    cache: 'force-cache',
    next: { revalidate: 100 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}