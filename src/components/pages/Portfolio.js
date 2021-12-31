import React from 'react';
import FadeIn from 'react-fade-in';
import applitrak from '../../assets/images/applitrak.gif'
import skilletshaker from '../../assets/images/skilletshaker.gif'
import weather from '../../assets/images/weather.gif'
import notetaker from '../../assets/images/notetaker.gif'

const styles = {
  carouselInner: {
    width: '75%',
    margin: 'auto'
  },
  text: {
    backgroundColor: 'white',
    borderRadius: '5%'
  },
  link: {
    color: 'black'
  },
  iconNext: {
    height: '100px',
    width: '100px',
    backgroundImage: 'none',
    content: 'next',
    fontSize: '55px',
    color: 'black'
  },
  iconPrev: {
    height: '100px',
    width: '100px',
    outline: 'black',
    backgroundSize: '100%, 100%',
    borderRadius: '50%',
    backgroundImage: 'none',
    '&:after': {
      content: '<',
      fontSize: '55px',
      color: 'black'
    }
  }
}

export default function Portfolio() {

  return (
    <FadeIn>
      <div className="tab-content">
        <h1>Portfolio</h1>
        <div style={styles.carouselContainer}>
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner" style={styles.carouselInner}>
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={applitrak} className="d-block w-100" alt="sample of applitrak app" />
                <div className="carousel-caption d-none d-md-block" style={styles.text}>
                  <h2>Applitrak</h2>
                  <a href="https://github.com/likearollinson/job-application-tracker" target="_blank" rel="noreferrer"><p style={styles.link}>GitHub Repository</p></a>
                  <a href="https://immense-eyrie-11789.herokuapp.com/login" target="_blank" rel="noreferrer"><p style={styles.link}>Deployed Application</p></a>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={skilletshaker} className="d-block w-100" alt="sample of skilletshaker app" />
                <div className="carousel-caption d-none d-md-block" style={styles.text}>
                  <h2>Skillet & Shaker</h2>
                  <a href="https://github.com/likearollinson/recipe-finder" target="_blank" rel="noreferrer"><p style={styles.link}>GitHub Repository</p></a>
                  <a href="https://likearollinson.github.io/recipe-finder/" target="_blank" rel="noreferrer"><p style={styles.link}>Deployed Application</p></a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={notetaker} className="d-block w-100" alt="sample of notetaker app" />
                <div className="carousel-caption d-none d-md-block" style={styles.text}>
                  <h2>Note Taker</h2>
                  <a href="https://github.com/likearollinson/unc-hw-11-note-taker" target="_blank" rel="noreferrer"><p style={styles.link}>GitHub Repository</p></a>
                  <a href="https://glacial-ridge-37758.herokuapp.com/" target="_blank" rel="noreferrer"><p style={styles.link}>Deployed Application</p></a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={weather} className="d-block w-100" alt="sample of weather app" />
              <div className="carousel-caption d-none d-md-block" style={styles.text}>
                <h2>Weather Dashboard</h2>
                <a href="https://github.com/likearollinson/unc-hw-6-weather-dashboard" target="_blank" rel="noreferrer"><p style={styles.link}>GitHub Repository</p></a>
                <a href="https://likearollinson.github.io/unc-hw-6-weather-dashboard/" target="_blank" rel="noreferrer"><p style={styles.link}>Deployed Application</p></a>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={styles.iconPrev}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="false" style={styles.iconsNext}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div >
    </FadeIn >
  );
}
