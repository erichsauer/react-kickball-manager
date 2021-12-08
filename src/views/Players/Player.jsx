import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { getPlayerById } from '../../services/players'

function Player({
  user,
  match: {
    params: { id },
  },
}) {
  const [player, setPlayer] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPlayerById(id)
      .then(({ data }) => setPlayer(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <Loading />

  return (
    <>
      <Link to="/players">Back to Players</Link>
      <h1>{player.name}</h1>
      <p>
        {player.position} for the {player.teams.name}
      </p>
      {user && (
        <p>
          <Link to={`/players/${id}/edit`}>Edit Player</Link>
        </p>
      )}
    </>
  )
}

export default Player
