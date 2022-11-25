import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Skills, Contact } from '../../pages/index';
import Navigation from '../Navigation/Navigation';
import { StyledApp } from '../../App.sc';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from '../../assets/common/color';
import { ThemeContext } from '../../App';

const SApp = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={colorTheme[theme]}>
      <StyledApp>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

export default SApp;
