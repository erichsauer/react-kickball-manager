import client from './client'

export async function getPlayers(query) {
  let request = client.from('players').select().order('name')
  if (query) {
    request = request.ilike('name', `%${query}%`)
  }

  return request
}

export async function getPlayerById(id) {
  return client.from('players').select('*, teams (*)').match({ id }).single()
}

export async function updatePlayerById(id, { name, position }) {
  return client.from('players').update({ name, position }).match({ id })
}

export async function createPlayer({ name, position, teamId }) {
  return client.from('players').insert([{ name, position, team_id: teamId }])
}

export async function deletePlayerById(id) {
  return client.from('players').delete().match({ id })
}
