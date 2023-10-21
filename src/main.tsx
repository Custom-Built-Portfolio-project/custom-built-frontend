import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-ymmap60bxehsj4ak.us.auth0.com'
      clientId='r1JFBy2GVd4UQ6QmEHp6bI50Pl3HAa14'
      authorizationParams={{
        redirect_uri: `http://localhost:5173/`
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
