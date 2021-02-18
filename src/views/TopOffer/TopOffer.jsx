import React from 'react';
import PropTypes from 'prop-types';
import styles from "./TopOffer.module.css"

const TopOffer = ({title,link,vigency,alternalInfo}) => {
    return <nav className={`ds-flex jc-center ${styles.wp}` }>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        <div className={styles.title} dangerouslySetInnerHTML={{__html: title}}>
        </div>
            <button className="button is-primary">Ver Ofertas</button>
        <p className={styles.vigency}>
            Vigenia del <br/>
            04 al 10 Enero
        </p>
    </nav>
}

TopOffer.propTypes = {
    title: PropTypes.string.isRequired,
    vigency: PropTypes.string
}


export default TopOffer;
