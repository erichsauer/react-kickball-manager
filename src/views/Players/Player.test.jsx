import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Player from './Player'

it('should render a player’s details', async () => {
  const { container } = render(
    <MemoryRouter>
      <Player match={{ params: { id: 1 } }} />
    </MemoryRouter>
  )
  screen.getByLabelText(/loading/)
  await screen.findByText(/Ben E. Jetts/)

  expect(container).toMatchSnapshot()
})
