import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <h3>Logged in as:</h3>
      <div className='playerName'>{props.userName}</div>
      <p>
        Join or Host a game at the top menu!
      </p>
      <Button className='basicButtons' variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
