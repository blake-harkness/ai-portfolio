import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.tsx'
import { init as initEmailJS } from '@emailjs/browser'

// Initialize EmailJS
initEmailJS(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Create an instance of Helmet async
const helmetContext = {};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
