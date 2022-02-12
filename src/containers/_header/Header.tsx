import React from 'react';
import './_header.css';
import avatarSrc from '../../assets/images/_asd.svg';

const Header = () => {
  return (
    <header>
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
