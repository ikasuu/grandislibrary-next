import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

import styles from '../styles/DropdownNav.module.css';

/*
    Dropdown menu component from navbar
    Created by: Ikasuu, Fall 2020
*/

function DropdownNav(props) {
    const setExpanded = props.setExpanded;
    return (
        <div className={styles["menu"]}>
            <Button className="nav-link-button nav-props" variant="link">Quick Links</Button>
            <div className={styles["dropdown-menu"]}>
                <Link className="nav-link-button nav-props" href="/content" onClick={() => setExpanded(false)}><a>Content</a></Link>
                <Link className="nav-link-button nav-props" href="/classes" onClick={() => setExpanded(false)}><a>Classes</a></Link>
                <Link className="nav-link-button nav-props" href="/events" onClick={() => setExpanded(false)}><a>Events</a></Link>
                <Link className="nav-link-button nav-props" href="/resources" onClick={() => setExpanded(false)}><a>Resources</a></Link>
            </div>
        </div>
    );
}

export default DropdownNav;
