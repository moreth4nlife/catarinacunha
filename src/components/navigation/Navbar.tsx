import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { NavLinks } from './NavItems';
import { useWindowSize } from "../../utils/ResponsiveHook";
import logoSrc from '../../assets/images/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const size = useWindowSize();
  const [isMobile, setMobileState] = useState<boolean>(false);
  const [isMobileMenuOpen, setMobileMenuState] = useState<boolean>(false);

  useEffect(() => {
    setMobileState(size.width && size.width <= 768 ? true : false);
  }, [size.width])

  return (
    <nav
      className={`nav flex flex--align-center ${isMobile ? "nav--mobile" : ""} ${isMobile && isMobileMenuOpen ? "open" : ""} `}>

      <div
        style={isMobile && isMobileMenuOpen ? { borderBottom: "1px solid var(--grey)" } : {}}
        className="nav--mobile-wrapper">
        <div className="logo">
          <span className="logo__name">Catarina Cunha</span>
        </div>

        <div className="nav--mobile-toggle--wrapper">
          <div
            aria-label="mobile menu"
            className={`nav--mobile-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuState(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>


      <ul
        style={isMobile && isMobileMenuOpen ? { display: "flex", flexDirection: "column", alignItems: "flex-start", visibility: "visible", opacity: "1" } : {}}
        className="nav--list flex flex--align-center ">
        {NavLinks.map((link, index) => {
          return (
            <Link key={index} to={link.url}>
              <li className={link.class}>{link.title}</li>
            </Link>
          )
        })}
      </ul>

      <div
        className="nav--contacts"
        style={isMobile && isMobileMenuOpen ? { display: "flex" } : {}}>
        <Link to="/#contacts" className='nav--contacts__text'>
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  )

}

export default Navbar