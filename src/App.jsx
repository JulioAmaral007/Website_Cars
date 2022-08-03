import React from 'react'

import AuthGoogleProvider from './Contexts/authGoogle'
import AppRoutes from './Routes/routes'

import './App.css'

function App  () {

  return (
    <div className='App'>
      <AuthGoogleProvider>
        <AppRoutes />
      </AuthGoogleProvider>
    </div>    
  );
}

export default App;
