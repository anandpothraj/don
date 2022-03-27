import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NewsContainer from './components/NewsContainer';
import './style.css';

function App() {

  const [ darkMode , setDarkMode ] = useState("dark");

  return (
    <>
      <Header darkMode={darkMode} setTheme={darkMode => setDarkMode(darkMode)}/>
      <NewsContainer darkMode={darkMode} />
    </>
  );
}

export default App;
