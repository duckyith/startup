import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Join } from './join/join';
import { Host } from './host/host';
import { About } from './about/about';

import { Play } from './play/play';
import { Vote } from './vote/vote';
import { VoteHost } from './voteHost/voteHost';
import { Wait } from './wait/wait';
import { WaitHost } from './waitHost/waitHost';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <header className="container-fluid text-light">
          <nav className="navbar fixed-top">
          <div className="navbar-brand" href="#">
            Out Of Line
            </div>
              <menu className="navbar-nav">
              <li className="nav-item">
                  <NavLink className="nav-link active" to="/">Join Game</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="host">Host Game</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="about">About</NavLink>
              </li>
              </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Join />} exact />
          <Route path='/host' element={<Host />} />
          <Route path='/about' element={<About />} />

          <Route path='/play' element={<Play />} />
          <Route path='/vote' element={<Vote />} />
          <Route path='/voteHost' element={<VoteHost />} />
          <Route path='/wait' element={<Wait />} />
          <Route path='/waitHost' element={<WaitHost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Created by Brady Scott</span>
            <a className="text-reset" href="https://github.com/duckyith/startup">Source</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}