import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home.jsx';
import Easy from './Components/easy.jsx';
import Medium from './Components/medium.jsx';
import Hard from './Components/Hard.jsx';
import theme from './Components/Theme.jsx';
import { ThemeProvider } from '@mui/material/styles';
import { ContextProvider } from './Components/contextProvider.jsx';
import axios from "axios";
import Apidata from "./Components/apidata.jsx";
function App() {
  return (
    <ContextProvider>
      <div className="App">
      <ThemeProvider theme={theme}>
        <Apidata />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/easy" element={<Easy />} />
              <Route path="/medium" element={<Medium />} />
              <Route path="/hard" element={<Hard />} />
            </Routes>
          </BrowserRouter>
          </ThemeProvider>
        </div>
      
    </ContextProvider>
  );
}

export default App;
