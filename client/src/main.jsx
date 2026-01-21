import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Hero from './Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <App />
  </StrictMode>,
)
