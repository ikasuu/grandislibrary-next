import React from 'react';
import styled from 'styled-components';

import ClassSwipe from '../ClassSwipers';
import { BannerAdThree } from '../Ads';

/*
This file contains the outro contents (after the skills overview) of a Class Overview
In this file you will find:
-ClassOutro - contains the more info and credits
-ClassMoreInfo - renders the links in more info
-ClassCredits - renders the credits
*/

export function ClassOutro({classGroup, classTitle, credits, infographic}) {
    return (
        <div>
            <BannerAdThree/>
            <hr/>
            <ClassSuggestions classTitle={classTitle} classGroup={classGroup}/>
            <ClassCredit credits={credits}/>
        </div>
    );
}

/*
    Rendering suggestion classes from the same class group
    Created by: Ikasuu, Fall 2020
*/

function ClassSuggestions({classTitle, classGroup}) {
    return (
        <div>
            <ClassSwipe classTitle={classTitle} classGroup={classGroup}/>
        </div>
    );
}

/*
    Rendering credits component in our class overviews
    Created by: Ikasuu, Fall 2020
*/

const CreditContainer = styled.div`
    margin: 1rem;
`;

function ClassCredit({credits}) {
    return (
        <div>
            <h3>Credits</h3>
            {credits.map(credit => <CreditContainer key={credit}><strong>{credit[0]}</strong>: {credit[1]}</CreditContainer>)}
        </div>
    );
}

export default ClassOutro;
