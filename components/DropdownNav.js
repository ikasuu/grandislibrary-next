import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

/*
    Dropdown menu component from navbar
    Created by: Ikasuu, Fall 2020
*/

function DropdownNav(props) {
    const setExpanded = props.setExpanded;
    return (
        <div className="dropdown-menu-container">
            <Button className="nav-link-button nav-props" variant="link">Quick Links</Button>
            <div className="dropdown-menu">
                <Link href="/content"><a className="nav-link-button nav-props" onClick={() => setExpanded(false)}>Content</a></Link>
                <Link href="/classes"><a className="nav-link-button nav-props" onClick={() => setExpanded(false)}>Classes</a></Link>
                <Link href="/events"><a className="nav-link-button nav-props" onClick={() => setExpanded(false)}>Events</a></Link>
                <Link href="/resources"><a className="nav-link-button nav-props" onClick={() => setExpanded(false)}>Resources</a></Link>
            </div>
        </div>
    );
}

export default DropdownNav;
