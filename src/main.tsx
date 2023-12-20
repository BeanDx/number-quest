import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/homepage/HomePage.tsx';
import './index.css';
import PlayPage from './components/playpage/PlayPage.tsx';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/play' element={<PlayPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
