import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

it('renders a welcome message when signed out', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  const homeText = screen.getByText(/Welcome to the Kickball League Directory!/i)
  expect(homeText).toBeInTheDocument()
})
