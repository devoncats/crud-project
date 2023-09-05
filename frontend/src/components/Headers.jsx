import { Outlet, Link } from 'react-router-dom'
import 'boxicons'
import '../styles/components/Headers.css'
import { useTheme } from '../hooks/useTheme'

export function Header () {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <header>
        <div className='left-box'>
          <div className='logo'>
            <span>JJ/fe-be</span>
          </div>

          <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about-us' className='link'>About us</Link>
            <Link to='/contact' className='link'>Contact</Link>
          </nav>
        </div>

        <div className='right-box'>
          <box-icon type='logo' name='github' color={theme === 'light' ? '#09090b' : '#f2f2f2'}><a href='#' /></box-icon>
          <box-icon name='linkedin-square' type='logo' color={theme === 'light' ? '#09090b' : '#f2f2f2'}><a href='#' /></box-icon>
          <span onClick={toggleTheme} className='theme-mode'>{theme === 'light' ? <box-icon name='sun' color='#09090b' /> : <box-icon name='moon' color='#f2f2f2' />}</span>
        </div>
      </header>

      <Outlet />
    </>
  )
}
