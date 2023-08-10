/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css';
import { Home } from './components/Home';

import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { About } from './components/About';
import { Nav } from './components/Nav';
import { Post } from './components/Post';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts' element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);