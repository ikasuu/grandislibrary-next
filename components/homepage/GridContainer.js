import React from 'react';

import { HeaderBlockImageUrl } from '../../special/SiteValues';
import GridItem from './GridItem';

import styles from '../../styles/GridItem.module.css';

/*
    Container for our image links on the homepage
    Created by: Ikasuu, Fall 2020
*/

function GridContainer() {
    return (
        <div className={styles["grid-flex-container"]}>
            <GridItem text="Content" linkTo="/content" imageUrl={HeaderBlockImageUrl.ristonia}/>
            <GridItem text="Classes" linkTo="/classes" imageUrl={HeaderBlockImageUrl.verdel}/>
            <GridItem text="Events" linkTo="/events" imageUrl={HeaderBlockImageUrl.fox}/>
            <GridItem text="Resources" linkTo="/resources" imageUrl={HeaderBlockImageUrl.grandis}/>
        </div>
    );
}

export default GridContainer;
