import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriespromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  return (
    <section id="center">
      <Suspense fallback={<p>NADIR IS LOADING</p>}>
        <Countries countriespromise={countriespromise} />
      </Suspense>
    </section>
  )
}

export default App