import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SongProvider } from './Context /SongContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SongProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SongProvider>
  </StrictMode>,
)
