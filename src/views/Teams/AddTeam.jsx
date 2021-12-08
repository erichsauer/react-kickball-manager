import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import TeamForm from '../../components/teams/TeamForm'
import { createTeam } from '../../services/teams'

function AddTeam({ user }) {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [alert, setAlert] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (!user) history.push('/teams')
  }, [user, history])

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value)
      case 'city':
        return setCity(target.value)
      case 'state':
        return setState(target.value)
      default:
        return false
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const { data, error } = await createTeam({ name, city, state })

    if (error) return setAlert(error.message)
    return history.push(`/teams/${data[0].id}`)
  }

  return (
    <>
      <Link to="/teams">Teams</Link> &raquo; <span>Add New</span>
      <br />
      <br />
      <p>{alert}</p>
      <TeamForm
        label="Add Team"
        name={name}
        city={city}
        state={state}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default AddTeam
