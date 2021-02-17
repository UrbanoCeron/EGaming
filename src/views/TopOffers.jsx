import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    'ds-flex':{
        display:'flex'
    },
    'jc-center':{
        justifyContent:'center'
    },
    'jc-space-between':{
        justifyContent: 'space-between'
    }
    ,
    wp: {
        background: 'rgb(0, 31, 51)',
        alignItems:'center'
    },
    title: {
      textAlign:'center',
      fontWeight:'bold',
        color:'white',
        margin:'0px 32px'
    },
    vigency:{
        color:"white",
        textAlign:"center",
        margin:'0px 32px'
    }
})

const TopOffers = ({title,link,vigency,alternalInfo}) => {
    const classes = useStyles()
    return <nav className={`${classes["ds-flex"]} ${classes["jc-center"]} ${classes.wp}` }>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        <div className={classes.title} dangerouslySetInnerHTML={{__html: title}}>
        </div>
            <button className="button is-primary">Ver Ofertas</button>
        <p className={classes.vigency}>
            Vigenia del <br/>
            04 al 10 Enero
        </p>
    </nav>
}

TopOffers.propTypes = {
    title: PropTypes.string
}


export default TopOffers;
