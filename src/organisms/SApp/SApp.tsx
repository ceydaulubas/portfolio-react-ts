import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Skills, Contact } from '../../pages/index';
import { Navigation, Socials } from '../index';
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
          <Socials />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

export default SApp;
