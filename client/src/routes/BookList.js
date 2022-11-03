import React from 'react';
import Book from '../components/Book';

export default function BookList() {
  return (
    <div className="BookList">
      <center>
        <h1>LISTE DES LIVRES :</h1>
        <Book />

        <a href="/">
          <button>HOME</button>
        </a>
      </center>
    </div>
  );
}