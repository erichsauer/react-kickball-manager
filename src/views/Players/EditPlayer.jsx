import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PlayerForm from '../../components/players/PlayerForm'
import { getPlayerById, updatePlayerById } from '../../services/players'

function EditPlayer({
  user,
  match: {
    params: { id },
  },
}) {
  const [input, setInput] = useState({ name: '', position: '' })
  const [player, setPlayer] = useState({ name: '', position: '' })
  const [alert, setAlert] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (!user) history.push('/players')
  }, [user, history])

  useEffect(() => {
    setInput(player)
  }, [player])

  useEffect(() => {
    getPlayerById(id)
      .then(({ data }) => setPlayer(data))
      .catch((err) => console.error(err))
  }, [id])

  const onChange = ({ target }) => {
    setInput((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const { data, error } = await updatePlayerById(player.id, {
      name: input.name,
      position: input.position,
    })

    if (error) return setAlert(error.message)
    return history.push(`/players/${data[0].id}`)
  }

  return (
    <>
      <Link to="/players">Players</Link> &raquo; <Link to={`/players/${id}`}>{player.name}</Link>{' '}
      &raquo; <span>Edit</span>
      <br />
      <br />
      <p>{alert}</p>
      <PlayerForm
        label="Edit Player"
        name={input.name}
        position={input.position}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default EditPlayer
