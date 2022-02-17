import React from 'react';
import Header from './Header';

import HomePage from './components/home-page/HomePage';
import OtherPage from './OtherPage';

import { Route, Routes } from 'react-router-dom';

type Props = {}

const Layout = (props: Props) => {
  return (
    <>

    <Header />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/OtherPage' element={<OtherPage/>} />
     
  </Routes>

    </>
  )
}

export default Layout;