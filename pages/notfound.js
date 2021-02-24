import React from 'react';
import { Container } from 'react-bootstrap';

import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';

/*
    Not found, 404 page
    Created by: Ikasuu, Fall 2020
*/

function NotFound() {
    return (
        <div>
            <HeaderImage imageUrl={HeaderImageUrl.library}/>
            <Container style={{marginBottom: '20rem'}}>
                <h3>Looks like there was an error in the URL you entered,
                the page you are looking for may be moved or deleted.</h3>
            </Container>
        </div>
    );
}

export default NotFound;