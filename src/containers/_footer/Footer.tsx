import React from 'react'
import { HiArrowSmUp } from "react-icons/hi";
import "./_footer.css";

const Footer = () => {
  return (
    <>
      <section className='footer--wrapper'>
        <div className='footer__title'>
          <h2>Contact me</h2>
        </div>
        <div className='footer__emoji' role="img" aria-label="emoji_footer" />
        <div className='footer__contacts'>
          <a href="mailto:catarinacunha.work@gmail.com" target="_blank" rel='noreferrer'>
            E-mail
            <span className='item__icon'><HiArrowSmUp /></span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=910412898" target="_blank" rel='noreferrer'>
            WhatsApp
            <span className='item__icon'><HiArrowSmUp /></span>
          </a>
          <a href="https://www.linkedin.com/in/catarinamcunha/" target="_blank" rel='noreferrer'>
            LinkedIn
            <span className='item__icon'><HiArrowSmUp /></span>
          </a>
        </div>
        <div className='footer__emoji__mobile' role="img" aria-label="emoji_footer" />
      </section>
    </>
  )
}

export default Footer