import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthorList from './routes/AuthorList';
import BookList from './routes/BookList';
import Home from './routes/Home'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/authors" element={<AuthorList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}