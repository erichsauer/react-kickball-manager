import client from './client'

export async function getTeams(query) {
  let request = client.from('teams').select().order('name')

  if (query) {
    request = request.ilike('name', `%${query}%`)
  }

  return request
}

export async function getTeamById(id) {
  return client.from('teams').select('*, players (*)').match({ id }).single()
}

export async function updateTeamById(id, { name, city, state }) {
  return client.from('teams').update({ name, city, state }).match({ id })
}

export async function createTeam({ name, city, state }) {
  return client.from('teams').insert({ name, city, state })
}

export async function deleteTeamById(id) {
  return client.from('teams').delete().match({ id })
}
