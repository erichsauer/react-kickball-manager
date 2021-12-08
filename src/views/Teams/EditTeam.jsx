import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import TeamForm from '../../components/teams/TeamForm'
import { getTeamById, updateTeamById } from '../../services/teams'

function EditTeam({
  user,
  match: {
    params: { id },
  },
}) {
  const [input, setInput] = useState({ name: '', city: '', state: '' })
  const [team, setTeam] = useState({ name: '', city: '', state: '' })
  const [alert, setAlert] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (!user) history.push('/teams')
  }, [user, history])

  useEffect(() => {
    setInput(team)
  }, [team])

  useEffect(() => {
    getTeamById(id)
      .then(({ data }) => setTeam(data))
      .catch((err) => console.error(err))
  }, [id])

  const onChange = ({ target }) => {
    setInput((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const { data, error } = await updateTeamById(team.id, {
      name: input.name,
      city: input.city,
      state: input.state,
    })

    if (error) return setAlert(error.message)
    return history.push(`/teams/${data[0].id}`)
  }

  return (
    <>
      <Link to="/teams">Teams</Link> &raquo; <Link to={`/teams/${id}`}>{team.name}</Link> &raquo;{' '}
      <span>Edit</span>
      <br />
      <br />
      <p>{alert}</p>
      <TeamForm
        label="Edit Team"
        name={input.name}
        city={input.city}
        state={input.state}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default EditTeam
