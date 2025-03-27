import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThingProvider} from "./Context/ThingContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThingProvider>
    <App />
    </ThingProvider>
  
  </StrictMode>,
)
