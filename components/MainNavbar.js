import React, { useState, Children } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import DropdownNav from './DropdownNav';
import { logo } from '../special/SiteValues';

/*
    Main navbar component for our site
    Created by: Ikasuu, Fall 2020
*/
const NavButton = styled(Button)`
    width: fit-content !important;
`;

function MainNavbar(props) {
  const [expanded, setExpanded] = useState(false);
  const setTheme = props.setTheme;
  const theme = props.theme;

  return (
      <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" expanded={expanded}>
          <Navbar.Brand>
            <Link href="/">
              <a className="site-title nav-props">
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
              <div className="nav-button-container">
                <NavButton variant="link" className="hvr-buzz-out"><a href="https://discord.gg/d4et8vt9kP" target='_blank' rel="noopener noreferrer"><span className="discord-button"/></a></NavButton>
                <NavButton variant="link" className="hvr-buzz-out"><a href="https://ko-fi.com/ikasuu" target='_blank' rel="noopener noreferrer"><span className="kofi-button"/></a></NavButton>
              </div>
              <DropdownNav setExpanded={setExpanded}/>
              <ActiveLink activeClassName="underline" href="/about"><a className="nav-link-button nav-props"onClick={() => setExpanded(false)}>About</a></ActiveLink>
              <ActiveLink activeClassName="underline" href="/"><a className="nav-link-button nav-props" onClick={() => setExpanded(false)}>Home</a></ActiveLink>
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

/*
    Active Link component which displays underline on the navbar for the link/page that is currently active
    Created by: Ikasuu, Fall 2020
*/
const ActiveLink = ({ children, activeClassName, ...props}) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === props.href 
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default MainNavbar;
