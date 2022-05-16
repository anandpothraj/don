import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NewsContainer from './components/NewsContainer';
import HomeContainer from './components/HomeContainer';
import RegisterContainer from './components/RegisterContainer';
import './style.css';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<HomeContainer/>} exact/>
            <Route path="/register" element={<RegisterContainer exact/>} />
            <Route path="/news" element={<NewsContainer/>} exact/>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
