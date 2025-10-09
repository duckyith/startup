import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
      <header className="container-fluid text-light">
        <nav className="navbar fixed-top">
        <a className="navbar-brand" href="#">Out Of Line</a>
            <menu className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" href="index.html">Join Game</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="host.html">Host Game</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
            </li>
            </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Created by Brady Scott</span>
          <a className="text-reset" href="https://github.com/duckyith/startup">Source</a>
        </div>
      </footer>
    </div>
  );
}