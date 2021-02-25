import React from "react";
import styles from "./CardSection.module.css"

const CardSection = ({
    brand, producto, section
}) => {
    return <div className={styles.container}>
        <div className={styles.cardContainer}>
            <div className={styles.header}>
                <a href="#">
                    <img src="" alt="" />
                </a>
                <h2>{brand}</h2>
                <h4>{section}</h4>
            </div>
            <div className={styles.descripcion}>
                <p>{producto}</p>
            </div>
        </div>
    </div>
}
export default CardSection;