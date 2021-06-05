import React from 'react';
import photo from '../../assets/images/headshot.jpg'

function About() {
  return (
    <div>
        <section class="hero">
            <img src={photo} alt="Cody"/>
        </section>

        <section class= "about-section" id="about-me">
            <div>
                <p>Full-stack web developer with a certificate from The University of Texas looking to transition into software engineering and web development full-time. Record store co-owner and multifaceted self-starter with over 10 years experience in the music industry leveraging creativity and knowledge of computers and technology to create high quality experiences and products. National and international tour veteran with valuable experience working collaboratively in fast-paced high-pressure environments.</p>
            </div>
        </section>
    </div>
    

  );
}

export default About;