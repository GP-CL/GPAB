// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ExploreProgram from './components/explore_program';
import './index.css';
import Landing from './components/landing_page';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
{/*         <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<ExploreProgram />} />
        <Route path="/book" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
