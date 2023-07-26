import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import theme from './theme.ts'
import {ChakraBaseProvider, ColorModeScript} from "@chakra-ui/react";
import '@fontsource-variable/roboto-mono';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraBaseProvider theme = {theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <App />
      </ChakraBaseProvider>
  </React.StrictMode>,
)
