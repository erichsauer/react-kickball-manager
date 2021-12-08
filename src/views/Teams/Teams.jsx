import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { deleteTeamById, getTeams } from '../../services/teams'

function Teams({ user }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  const loadTeams = () => {
    getTeams()
      .then(({ data }) => setTeams(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadTeams()
  }, [])

  const handleDelete = ({ id, name }) => {
    const shouldDelete = confirm(`Are you sure you want to delete ${name}?`)

    if (shouldDelete) {
      deleteTeamById(id).then(() => loadTeams())
    }
  }

  return (
    <>
      {user && <Link to="/teams/new">Add New Team</Link>}
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Teams</h1>
          <table className="resource-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id}>
                  <td>
                    <Link to={`/teams/${team.id}`}>{team.name}</Link>
                  </td>
                  <td>
                    <Link to={`/teams/${team.id}`}>
                      <button type="button" className="btn-view">
                        View
                      </button>
                    </Link>
                    {user && (
                      <>
                        <Link to={`/teams/${team.id}/edit`}>
                          <button type="button" className="btn-edit">
                            Edit
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn-delete"
                          onClick={() => handleDelete(team)}
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
      )}
    </>
  )
}

export default Teams
