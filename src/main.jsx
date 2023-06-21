import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SignInProvider } from './context/AuthContext.jsx'
import TodoProvider from './context/TodoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <SignInProvider>
        <App/>
      </SignInProvider>
    </TodoProvider>
  </React.StrictMode>,
)
