import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Skills } from './pages';
import { Navigation } from './organisms';
import { StyledApp } from './App.sc';

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
