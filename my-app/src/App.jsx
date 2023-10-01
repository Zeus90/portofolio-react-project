import React, { useContext } from 'react';
import Intro from './components/intro/intro';
import About from "./components/about/about"
import ProductList from './components/ProductList/productList';
import Contact from './components/contact/contact'
import Toggle from './components/toggle/toggle'
import {ThemeContext} from "./context"


function App() {

  const themeContext = useContext(ThemeContext);
  const darkMode = themeContext.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
