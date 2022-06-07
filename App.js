import React , { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NewsContainer from './components/NewsContainer';
import './style.css';
import { Theme } from './Context';

function App() {

  const { bgColor }= useContext(Theme);
  const grey = " #D3D3D3"

  return (
    <>
      <div className="bodyDiv mh-100" style={{background: `linear-gradient(${bgColor},${grey})`}}>
        <Header/>
        <NewsContainer/>
      </div>

    </>
  );
}

export default App;
