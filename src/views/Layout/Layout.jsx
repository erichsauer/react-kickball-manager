import PropTypes from 'prop-types'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import './Layout.css'

function Layout({ children, user, setCurrentUser }) {
  return (
    <div className="container">
      <Header user={user} setCurrentUser={setCurrentUser} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
