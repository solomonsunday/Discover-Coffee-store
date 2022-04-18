import React from 'react';
import styles from './banner.module.css';

const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title1}> <span>Coffee</span>
                <span className={styles.title2}>Connoisseur</span></h1>
            <p className={styles.subTitle}>Discover your local coffee shops!</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={props.handlerOnClick}>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default Banner