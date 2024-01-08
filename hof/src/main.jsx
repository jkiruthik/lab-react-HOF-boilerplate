import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HigherOrderFunction from './component/HigherOrderFunction.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HigherOrderFunction></HigherOrderFunction>
    {/* <App /> */}
  </React.StrictMode>,
)
