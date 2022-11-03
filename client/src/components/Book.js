import React from 'react';
import {GET_BOOKS} from '../queries/books';
import { useQuery } from '@apollo/client';

export default function Book() {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return data.books.map((book) => (
    <div key={book.id}>
      <p><strong>{book.title}</strong> by {book.author} <br></br>
      {book.rate}/20</p>
    </div>
  ));
}
