import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='bg-amber-500'>Hello</h2>
    
  </StrictMode>,
)
