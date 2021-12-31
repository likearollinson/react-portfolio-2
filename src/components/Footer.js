import React from 'react';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import email from '../assets/images/email.png';

const styles = {
    footer: {
        padding: '20px',
        position: 'fixed',
        bottom: '0',
        height: '75px',
        width: '100%',
        margin: '0 auto'
    },
    github: {
        height: '95%'
    },
    linkedin: {
        height: '95%'
    },
    email: {
        height: '90%',
        marginLeft: '5px'
    }
}

function Footer() {

    function size100(e) {
        e.target.style.height = '100%';
    }

    function size95(e) {
        e.target.style.height = '95%';
    }

    function size90(e) {
        e.target.style.height = '90%';
    }


    return (
        <div className="d-flex justify-content-center" style={styles.footer}>
            <a href="https://github.com/likearollinson/"><img src={github} alt="github logo" style={styles.github} onMouseOver={size100} onMouseLeave={size95} /></a>
            <a href="https://www.linkedin.com/in/brad-rollinson-220/"><img src={linkedin} alt="linkedin logo" style={styles.linkedin} onMouseEnter={size100} onMouseLeave={size95} /></a>
            <a href="mailto:brad.w.rollinson@gmail.com"><img src={email} alt="email logo" style={styles.email} onMouseEnter={size95} onMouseLeave={size90} /></a>
        </div>
    )
}

export default Footer;