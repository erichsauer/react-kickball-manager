import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { deletePlayerById, getPlayers } from '../../services/players'

function Players({ user }) {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  const loadPlayers = () => {
    getPlayers()
      .then(({ data }) => setPlayers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadPlayers()
  }, [])

  const handleDelete = ({ id, name }) => {
    const shouldDelete = confirm(`Are you sure you want to delete ${name}?`)

    if (shouldDelete) {
      deletePlayerById(id).then(() => loadPlayers())
    }
  }

  if (loading) return <Loading />

  return (
    <>
      <h1>Players</h1>
      <table className="resource-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>
                <Link to={`/players/${player.id}`}>{player.name}</Link>
              </td>
              <td>
                <Link to={`/players/${player.id}`}>
                  <button type="button" className="btn-view">
                    View
                  </button>
                </Link>
                {user && (
                  <>
                    <Link to={`/players/${player.id}/edit`}>
                      <button type="button" className="btn-edit">
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleDelete(player)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Players
