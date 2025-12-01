import { useEffect, useState } from 'react'
import './App.css'

// type TelegramUserType = {
//   telegram_id: string
//   username?: string | null
//   name?: string | null
// }

const tg = window.Telegram?.WebApp

function App() {
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    tg?.ready()
  }, [])

  const onClose = () => tg?.close()

  return (
    <div>
      <h1>My Telegram Mini App</h1>
      <button onClick={onClose}>close</button>
    </div>
  )
}

export default App
