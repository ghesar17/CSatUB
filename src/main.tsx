import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {ChakraBaseProvider} from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraBaseProvider>
    <App />
      </ChakraBaseProvider>
  </React.StrictMode>,
)
