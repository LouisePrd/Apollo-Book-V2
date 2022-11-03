import React from 'react';
import Author from '../components/Author';

export default function AuthorList() {
    return (
        <div className="AuthorList">
            <center>
                <h1>LISTE DES AUTEURS :</h1>
                <Author />

                <a href="/">
                    <button>HOME</button>
                </a>
            </center>
        </div>
    );
}