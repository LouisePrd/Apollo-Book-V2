import React from 'react';
import {GET_AUTHORS} from '../queries/authors';
import { useQuery } from '@apollo/client';

export default function Author() {
    const { data, loading, error } = useQuery(GET_AUTHORS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    
    return data.authors.map((author) => (
        <div key={author.id}>
        <p><strong>{author.id}, {author.author}</strong></p>
        </div>
    ));
}
