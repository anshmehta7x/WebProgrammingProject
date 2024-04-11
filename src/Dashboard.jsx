import Navbar from './Components/Navbar'
import './Dashboard.css'

function Dashboard() {

  return (
    <>
    <Navbar />
    <main className='main-section'>
      <section className='text-section'>
        <h1 className='welcome'>Welcome to MedSearch</h1>
        <p>Find the best doctors in your area</p>
        <button className='find-doctors'>Find Doctors</button>
      </section>
      <section>
        <img src='/doctor-graphic.png' alt='doctor' className='doctor-graphic' />
      </section>
    </main>
    </>
  )
}

export default Dashboard
