import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Players from './Players'

it('should render a list of players', async () => {
  // MemoryRouter is needed because <Players> uses the <Link> component
  const { container } = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  )
  screen.getByLabelText(/loading/)
  await screen.findByText(/Ben E. Jetts/)

  expect(container).toMatchSnapshot()
})
