import React from 'react';
import './_header.css';

const Header = () => {
  return (
    <header className="main--header" id="header">
      <div className='header--block left'>
        <h1>
          Hello there,<br /> I'm Catarina Cunha
        </h1>
        <p>
          I have a major in Communication Sciences and a master in <br /> Communication Design. I would say I’m a pretty good communicator!
        </p>
      </div>
      <div
        className='header--block right'>
      </div>
    </header>
  );
};

export default Header;
