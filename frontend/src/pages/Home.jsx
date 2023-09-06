import '../styles/pages/Home.css'
import { Header } from '../components/Headers'

export function Home () {
  return (
    <>
      <Header />

      <div className='hero'>
        <div className='left-hero'>
          <h1 className='title text-4xl font-bold'>In search of perfection.</h1>
        </div>
        <div className='right-hero'>
          <h1>Placeholder</h1>
        </div>
      </div>
    </>
  )
}
