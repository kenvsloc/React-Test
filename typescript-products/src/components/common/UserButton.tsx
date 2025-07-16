// import React, { useState } from 'react';
import Buttons from '../../lib/button';

function UserButton() {
    return (
      <div>
        <Buttons variant="primary" onClick={() => alert('Clicked!')}>
          Click me
        </Buttons>
        <Buttons variant="secondary" >
           nut thu 2
        </Buttons>
        <Buttons variant="danger" onClick={() => alert('Clicked!')}>
          not click
        </Buttons>
        <Buttons variant="success" >
          succes
        </Buttons>
      </div>
    );
  }

  export default UserButton;