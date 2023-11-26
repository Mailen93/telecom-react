// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// App
import App from './App.jsx'

// Styles
import './index.css'

// Components
import Navbar from './components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
)
