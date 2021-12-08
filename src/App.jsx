import { Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import Auth from './views/Auth/Auth'
import Team from './views/Teams/Team'
import Teams from './views/Teams/Teams'
import Player from './views/Players/Player'
import Players from './views/Players/Players'
import NotFound from './views/NotFound/NotFound'
import AddTeam from './views/Teams/AddTeam'
import EditTeam from './views/Teams/EditTeam'
import { getUser } from './services/users'
import EditPlayer from './views/Players/EditPlayer'
import AddPlayer from './views/Players/AddPlayer'

function App() {
  const [user, setCurrentUser] = useState(null)

  useEffect(() => {
    const session = getUser()

    if (session?.user?.role === 'authenticated') setCurrentUser(session.user)
  }, [])

  return (
    <Layout user={user} setCurrentUser={setCurrentUser}>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/sign-in">
          <Auth setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/teams" render={(routeProps) => <Teams {...routeProps} user={user} />} />
        <Route
          exact
          path="/teams/new"
          render={(routeProps) => <AddTeam {...routeProps} user={user} />}
        />
        <Route
          exact
          path="/teams/:id"
          render={(routeProps) => <Team {...routeProps} user={user} />}
        />
        <Route
          exact
          path="/teams/:id/edit"
          render={(routeProps) => <EditTeam {...routeProps} user={user} />}
        />
        <Route
          exact
          path="/players"
          render={(routeProps) => <Players {...routeProps} user={user} />}
        />
        <Route
          exact
          path="/players/new"
          render={(routeProps) => <AddPlayer {...routeProps} user={user} />}
        />
        <Route
          exact
          path="/players/:id"
          render={(routeProps) => <Player {...routeProps} user={user} />}
        />
        <Route
          exact
          path="/players/:id/edit"
          render={(routeProps) => <EditPlayer {...routeProps} user={user} />}
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
