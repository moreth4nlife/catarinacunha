import React, { CSSProperties, useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { NavLinks } from './NavItems';
import { useWindowSize } from "../../utils/ResponsiveHook";
import logoSrc from '../../assets/images/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();
  const size = useWindowSize();
  const [isMobile, setMobileState] = useState<boolean>(false);
  const [isMobileMenuOpen, setMobileMenuState] = useState<boolean>(false);

  useEffect(() => {
    setMobileState(size.width && size.width <= 768 ? true : false);
  }, [size.width]);

  const removeHash = () => {
    history.push("/")
  }

  const menuMobileOpenCSS: CSSProperties = {
    gridColumn: "1 / span 4",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    visibility: "visible",
    opacity: "1",
    backgroundColor: "var(--pink)",
    borderLeft: "1px solid var(--grey)",
    borderRight: "1px solid var(--grey)",
    borderTop: "1px solid var(--grey)"
  }


  return (
    <nav
      className={`nav ${isMobile ? "nav--mobile" : ""} ${isMobile && isMobileMenuOpen ? "open" : ""} `}>

      <div
        style={isMobile && isMobileMenuOpen ? { borderBottom: "1px solid var(--grey)" } : {}}
        className="nav--mobile-wrapper">

        {/* <Link to="/#header" smooth> */}
        <div className="logo" onClick={() => { window.scrollTo(0, 0); history.push("/"); }}>
          <span className="logo__name">Catarina Cunha</span>
        </div>
        {/* </Link> */}


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

        <ul
          style={isMobile && isMobileMenuOpen ? menuMobileOpenCSS : {}}
          className="nav--list flex flex--align-center ">
          {NavLinks.map((link, index) => {
            return (
              <Link key={index} to={link.url} smooth>
                <li className={link.class}>{link.title}</li>
              </Link>
            )
          })}
        </ul>

      </div>

      {!isMobile &&
        <div
          className="nav--contacts">
          <Link to="/#contacts" className='nav--contacts__text' smooth>
            <span>Contact</span>
          </Link>
        </div>
      }

    </nav>
  )

}

export default Navbar