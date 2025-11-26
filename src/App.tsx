import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [debug, setDebug] = useState<string | null>(null)

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    if (!tg) setDebug('TG не найден')

    tg?.ready()

    const user = tg?.initDataUnsafe?.user

    setDebug(
      JSON.stringify(
        {
          initDataUnsafe: tg?.initDataUnsafe,
          user,
        },
        null,
        2
      )
    )
  }, [])

  const tg = window.Telegram?.WebApp

  const username = tg?.initDataUnsafe?.user?.username
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Привет, {username}</h2>
      <h2>{debug || 'Ждем данных от телеграмм'}</h2>
    </>
  )
}

export default App
