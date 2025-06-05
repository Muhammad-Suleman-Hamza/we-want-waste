import "./styles/main.css";
import { StrictMode } from 'react'
import HomePage from './pages/HomePage'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HomePage />
  // </StrictMode>,
)
