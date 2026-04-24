import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Clients from './Clients.jsx'
const root = document.getElementById('root')


createRoot(root).render(

  <StrictMode>
    <Clients />
  </StrictMode>
)
