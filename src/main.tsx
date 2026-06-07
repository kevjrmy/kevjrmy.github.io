import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'

createRoot(
  document.getElementById('root')!) // The ID "root" is the target element in index.html
  .render(
    <StrictMode>
      <App /> {/* Main application component -> src/App.tsx */}
    </StrictMode>,
  )
