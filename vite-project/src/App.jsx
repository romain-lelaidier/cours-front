import { createSignal } from 'solid-js'
import solidLogo from './assets/sun.jpg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <img src={solidLogo} class="logo solid" alt="Solid logo" />
      </div>
      <h1>Romain Lelaidier</h1>
      <div class="card">
        <button onClick={() => window.location.href="./cv.html"}>
          Mon CV
        </button>
      </div>
    </>
  )
}

export default App
