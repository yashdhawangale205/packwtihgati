import React from 'react'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="font-sans antialiased text-secondary">
        <Home />
      </div>
    </AuthProvider>
  )
}

export default App

