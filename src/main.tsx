import { StrictMode } from 'react'

import { App } from '@/App'
import { Dune } from '@/Dune'
import { createRoot } from 'react-dom/client'

import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Dune />
  </StrictMode>
)
