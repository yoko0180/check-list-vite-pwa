import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pkg from "../package.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-5">
      <div>
        <span>ver {pkg.version}</span>
      </div>
      <h1 className="text-4xl m-8">Vite + React</h1>
      <div className="card border rounded p-3 m-3">
        <button onClick={() => setCount((count) => count + 1)} className="border rounded p-1 m-1">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
