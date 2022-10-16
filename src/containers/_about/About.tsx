import React from 'react';
import './_about.css';
import avatarSrc from '../../assets/images/_avatarHeader.svg';

const About = () => {
  return (
    <section className='about-wrapper' id="about">

      <div className='about--block left' />

      <div className='about--block right'>
        <h3>
          So, who am I really?
        </h3>
        <p>
          From a very young age I have had a keen eye for detail and organization, resulting in my interest for design and visual arts.
          Communication is not only my major, it’s my passion and way of life. Well, what better way to combine these two than doing my master’s in Communication Design?
          <br /><br />
          My mission as a communicator and a designer is to solve real world issues through design thinking.
          <br /><br />
          I’m also an animal lover with a passion for fashion, aiming to leave the world a better place than I found it.
        </p>
      </div>

    </section>
  );
};

export default About;
