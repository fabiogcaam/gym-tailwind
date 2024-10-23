import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Calendar/Calendar.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWraper } from './context/auth.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviderWraper>
    <Router>
      <React.StrictMode>
        <Navbar />
        <App />
      </React.StrictMode>
    </Router>
  </AuthProviderWraper>
)
