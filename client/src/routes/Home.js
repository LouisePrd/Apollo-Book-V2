import React from 'react';
import '../App.css';

export default function Home() {
    return (
        <div className="Home">
            <center>
                <h1>Bienvenue à <br></br> la bibliothèque</h1>
                <br></br>
                <a href="http://localhost:3000/books">
                    <button>LISTE LIVRES</button>
                </a>
                <a href="/authors">
                    <button>LISTE AUTEURS</button>
                </a>
            </center>
        </div>


    );
}