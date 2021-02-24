import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';

import DropdownNav from './DropdownNav';
import { logo } from '../special/Values';

/*
    Main navbar component for our site
    Created by: Ikasuu, Fall 2020
*/

//Check if homepage for NavLink use, else we will always have an underline under 'Home'
const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
}

const NavButton = styled(Button)`
    width: fit-content !important;
`;

function MainNavbar(props) {
  const [expanded, setExpanded] = useState(false);
  const setTheme = props.setTheme;
  const theme = props.theme;
  
  // const ClickHandler = () => {
  //   ReactGA.event({
  //     category: 'Butt-on',
  //     action: "Discord button"
  //   })
  // }

  return (
      <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" expanded={expanded}>
          <Navbar.Brand>
            <Link className="site-title nav-props" href="/">
              <a>
                <img
                    src={logo}
                    width="42"
                    height="42"
                    className="d-inline-block align-text-top"
                    alt="Grandis Library logo"
                  />{' '}
                  Grandis Library
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mr-auto"/>
            <Nav>
              <NavButton variant="link" className="hvr-buzz-out"><a href="https://discord.gg/d4et8vt9kP" target='_blank' rel="noopener noreferrer"><span className="discord-button"/></a></NavButton>
              <DropdownNav setExpanded={setExpanded}/>
              <Link className="nav-link-button nav-props" activeClassName="underline" href="/about" onClick={() => setExpanded(false)}><a>About</a></Link>
              <Link className="nav-link-button nav-props" activeClassName="underline" isActive={checkActive} href="/" onClick={() => setExpanded(false)}><a>Home</a></Link>
            </Nav>
            <NavButton variant="link" onClick={e=>
                  setTheme(
                    theme.mode === 'dark'
                      ? {...theme, mode: 'light'}
                      : {...theme, mode: 'dark'}) }>
                <span className="toggle-mode"/>
            </NavButton>
            </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default MainNavbar;
