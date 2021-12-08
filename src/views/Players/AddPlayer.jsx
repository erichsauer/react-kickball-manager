import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PlayerForm from '../../components/players/PlayerForm'
import { getPlayerById, createPlayer } from '../../services/players'

function AddPlayer({
  user,
  match: {
    params: { id },
  },
}) {
  const [input, setInput] = useState({ name: '', position: '', teamId: '' })
  const [team, setTeam] = useState({ name: '', position: '', teamId: '' })
  const [alert, setAlert] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (!user) history.push('/players')
  }, [user, history])

  useEffect(() => {
    setInput(team)
  }, [team])

  useEffect(() => {
    getPlayerById(id)
      .then(({ data }) => setTeam(data))
      .catch((err) => console.error(err))
  }, [id])

  const onChange = ({ target }) => {
    setInput((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const { data, error } = await createPlayer(input)

    if (error) return setAlert(error.message)
    return history.push(`/players/${data[0].id}`)
  }

  return (
    <>
      <Link to="/players">Players</Link> &raquo; <Link to={`/players/${id}`}>{team.name}</Link>{' '}
      &raquo; <span>Add</span>
      <br />
      <br />
      <p>{alert}</p>
      <PlayerForm
        label="Add Player"
        name={input.name}
        position={input.position}
        teamId={input.teamId}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default AddPlayer
