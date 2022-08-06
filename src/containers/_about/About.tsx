import React from 'react';
import './_about.css';
import avatarSrc from '../../assets/images/_avatarHeader.svg';

const About = () => {
  return (
    <section className='about-wrapper' id="about">

      <div className='about--block left'>

      </div>

      <div className='about--block right'>
        <h2>
          So, who am I really?
        </h2>
        <p>
          From a very young age I have had a keen eye for detail and organization, resulting in my interest for design and visual arts.
          Communication is not only my major, it’s my passion and way of life. Well, what better way to combine these two than doing my master’s in Communication Design?
          <br /><br />
          My mission as a communicator and a designer is to lorem ipsum dolor sit amed consectum não sei quê.
          <br /><br />
          I’m also an animal lover with a passion for fashion, aiming to leave the world a better place than I found it.
        </p>

        <div className='about--tags'>
          <div className='about--tags__column'>
            <span>🤲&nbsp;&nbsp;&nbsp;volunteering</span>
            <span>🐾&nbsp;&nbsp;&nbsp;animal protection</span>
            <span>🌿&nbsp;&nbsp;&nbsp;sustainability</span>
          </div>
          <div className='about--tags__column'>
            <span>💻&nbsp;&nbsp;&nbsp;technology</span>
            <span>🏛️&nbsp;&nbsp;&nbsp;art</span>
            <span>👢&nbsp;&nbsp;&nbsp;fashion</span>
            <span>💬&nbsp;&nbsp;&nbsp;social media</span>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;
