import React from 'react';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

import styles from '../../styles/GridItem.module.css';

/*
    Individual grid item component for our homepage. To be used with our GridContainer.js
    Created by: Ikasuu, Fall 2020
*/

function GridItem(props) {
    return (
        <div className={styles["grid-wrapper"]}>
            <Link href={props.linkTo}>
                <a>
                    <Image className={styles["grid-image"]} src={props.imageUrl}/>
                    <div className={styles["grid-overlay"]}/>
                    <div className={styles["grid-text"]}>
                        <h3 className={styles["grid-title"]}>{props.text}</h3>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default GridItem;
