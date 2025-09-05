import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes.jsx'
import Globalstyles from './styles/globalstyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/devmovie">
    <Router />
    </BrowserRouter>
    <Globalstyles />
  </StrictMode>,
)
