import React from 'react';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';


import './App.css';
import Layout from './Layout';

function App() {
  return (
    <>
    <BrowserRouter>
    
      <Layout /> 
    </BrowserRouter>
    </>
  );
}

export default App;
