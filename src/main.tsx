import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PlayersContextProvider } from './contexts/PlayersContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <PlayersContextProvider>
    <React.StrictMode>
      
        <App />
      
    </React.StrictMode>
  </PlayersContextProvider>
)
