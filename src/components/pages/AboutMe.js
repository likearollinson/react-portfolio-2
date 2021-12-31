import React from 'react';
import FadeIn from 'react-fade-in';
import profile from '../../assets/images/brad.png'

const styles = {
  profile: {
    width: '100%',
    borderRadius: '1%',
    marginTop: '15px'
  }
}

export default function AboutMe() {
  return (
    <FadeIn>
      <div className="container tab-content">
        <div className="row align-items-start">
          <div className="col-8">
            <h1 className="d-flex justify-content-start" >About Me</h1>
            <p className="d-flex justify-content-start">
              As a student at UNC Chapel Hill's code academy focusing on Full Stack Development, I am looking to utilize the skills I have learned to make a positive impact to your team. I am a quick learner and am looking for a position that will help to expand my skills while contributing to the company.
            </p>
          </div>
          <div className="col-4">
            <img src={profile} alt="profile of brad rollinson" style={styles.profile} />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
