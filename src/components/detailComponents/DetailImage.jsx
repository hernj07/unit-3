import React from "react";
import styles from './Details.module.css'

const DetailImage = ({ title, image }) => {

    return (
        <div
            className={styles.banner}
            style={{
                backgroundSize: "contain",
                background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
            }}>
            <div className={styles.ad_text}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default DetailImage;