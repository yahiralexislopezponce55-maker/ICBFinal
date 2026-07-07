import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ProviderStore } from './storeConfig'
import { Store } from './store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderStore store={Store}>
      <App />
    </ProviderStore>
  </StrictMode>,
)
