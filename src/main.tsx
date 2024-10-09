import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { enbleMSW } from './api/mocks/index.ts'
import { App } from './App.tsx'

enbleMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
