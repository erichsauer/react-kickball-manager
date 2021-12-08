import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { getTeamById } from '../../services/teams'

function Teams({
  user,
  match: {
    params: { id },
  },
}) {
  const [team, setTeam] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTeamById(id)
      .then(({ data }) => setTeam(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  return loading ? (
    <Loading />
  ) : (
    <>
      <Link to="/teams">Teams</Link> &raquo; <span>{team.name}</span>
      <h1>{team.name}</h1>
      <p>
        {team.city}, {team.state}
      </p>
      {user && (
        <p>
          <Link to={`/teams/${id}/edit`}>Edit Team</Link>
        </p>
      )}
      <ul>
        {team.players.map((player) => (
          <li key={player.id}>
            {player.position}: <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Teams
