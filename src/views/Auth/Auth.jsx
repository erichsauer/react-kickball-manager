import React, { useState } from 'react'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import { signInUser, signUpUser } from '../../services/users'
import './Auth.css'

function Auth({ setCurrentUser }) {
  const history = useHistory()
  const [type, setType] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    if (!email || !password) return
    if (type === 'signin') {
      try {
        const { user } = await signInUser(email, password)

        setCurrentUser(user)
        history.push('/')
      } catch (error) {
        setErrorMessage(error.message || 'Something went wrong. Please try again.')
      }
    } else {
      try {
        const { user } = await signUpUser(email, password)

        setCurrentUser(user)
        history.push('/')
      } catch (error) {
        setErrorMessage(error.message || 'Something went wrong. Please try again.')
      }
    }
  }
  return (
    <div className="auth">
      <div className="tabs">
        <button
          type="button"
          className={classNames({ active: type === 'signin' })}
          onClick={() => setType('signin')}
        >
          Sign In
        </button>
        <button
          type="button"
          className={classNames({ active: type === 'signup' })}
          onClick={() => setType('signup')}
        >
          Sign Up
        </button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="submit"
          value={type === 'signin' ? 'Sign In' : 'Sign Up'}
          disabled={!email || !password}
        />
      </form>
    </div>
  )
}

export default Auth
