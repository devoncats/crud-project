import { Outlet, Link } from 'react-router-dom'
import '../styles/pages/Register.css'

export function Register () {
  return (
    <>
      <main className='h-screen flex'>
        <section className='left-register flex flex-1 p-10 max-w-2/6'>
          <div className='logo-inverted font-medium text-xl'>Devoncats</div>
        </section>

        <section className='right-register flex flex-1 p-10'>
          <Link to='/login' className='login absolute right-12 top-10'>Login</Link>

          <div className='flex flex-col justify-center items-center w-full gap-5'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text text-2xl font-semibold'>Create an account</h1>
              <p className='sub-text text-sm'>Enter your email below to create your account</p>
            </div>

            <form className='flex flex-col gap-2' action=''>
              <label htmlFor=''>Email</label>
              <input className='border rounded-lg h-9 w-96' type='email' name='' id='' placeholder='example@example.com' />

              <label htmlFor=''>Password</label>
              <input className='border rounded-lg h-9 w-96' type='password' name='' id='' />

              <label htmlFor=''>Confirm password</label>
              <input className='border rounded-lg h-9 w-96' type='password' name='' id='' />

              <button className='register border rounded-lg h-9 w-96' type='submit'>Register</button>
            </form>

            <div>
              <span className='sub-text text-sm'>Or continue with</span>
            </div>

            <div className='flex w-96 justify-between gap-5'>
              <div className='github flex items-center justify-center font-medium text-sm rounded-lg h-9 w-full gap-1'>
                {document.querySelector('html').getAttribute('data-theme') === 'light' ? <box-icon name='github' type='logo' color='#ffffff' /> : <box-icon name='github' type='logo' color='#080808' />}
                Github
              </div>
              <div className='linkedin flex items-center justify-center font-medium text-sm rounded-lg h-9 w-full gap-1  '>
                <box-icon name='linkedin-square' type='logo' color='#ffffff' />
                Linkedin
              </div>
            </div>

            <div className='sub-text text-sm text-center'>
              By clicking continue, you agree <br />
              to our Terms of Service and Privacy Policy.
            </div>
          </div>
        </section>
      </main>

      <Outlet />
    </>
  )
}
