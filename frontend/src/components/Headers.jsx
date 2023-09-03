import { Outlet, Link } from 'react-router-dom'
import 'boxicons'

export function Header () {
  return (
    <>
      <header>
        <box-icon name='ghost' />

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about-us'>About us</Link>
          <Link to='/login'>Login</Link>
        </nav>

      </header>
      <Outlet />
    </>
  )
}
