import { Outlet, Link } from 'react-router-dom'
import 'boxicons'
import '../styles/components/Headers.css'
import { useTheme } from '../hooks/useTheme'

export function Header () {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <header className='sticky flex items-center justify-center top-0 left-0 pl-10 pr-10 h-12'>
        <section className='max-w-3xl flex flex-1 gap-5'>
          <div className='logo font-bold'>Devoncats</div>

          <nav className='flex items-center gap-5'>
            <Link to='/' className='link text-sm font-medium'>Home</Link>
            <Link to='/about-us' className='link text-sm font-medium'>About us</Link>
            <Link to='/contact' className='link text-sm font-medium'>Contact</Link>
          </nav>
        </section>

        <section className='max-w-lg flex flex-1 justify-end gap-5'>
          <a className='h-buttons w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer' href='https://github.com/devoncats/'><box-icon type='logo' name='github' color={theme === 'light' ? '#09090b' : '#f2f2f2'}><a href='#' /></box-icon></a>
          <a className='h-buttons w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer' href='https://www.linkedin.com/in/jose-ignacio-vasquez/'><box-icon name='linkedin-square' type='logo' color={theme === 'light' ? '#09090b' : '#f2f2f2'}><a href='#' /></box-icon></a>
          <span onClick={toggleTheme} className='h-buttons w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer'>{theme === 'light' ? <box-icon name='sun' color='#09090b' /> : <box-icon name='moon' color='#f2f2f2' />}</span>
        </section>
      </header>

      <Outlet />
    </>
  )
}
