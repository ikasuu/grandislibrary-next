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
                <Link
                    href="/content"
                    className="nav-link-button nav-props"
                    onClick={() => setExpanded(false)}>Content</Link>
                <Link
                    href="/classes"
                    className="nav-link-button nav-props"
                    onClick={() => setExpanded(false)}>Classes</Link>
                <Link
                    href="/events"
                    className="nav-link-button nav-props"
                    onClick={() => setExpanded(false)}>Events</Link>
                <Link
                    href="/resources"
                    className="nav-link-button nav-props"
                    onClick={() => setExpanded(false)}>Resources</Link>
            </div>
        </div>
    );
}

export default DropdownNav;
