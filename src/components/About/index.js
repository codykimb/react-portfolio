import React from 'react';

function About() {
  return (
    <main>
        <section class="hero">
            <img src="/assets/images/cody.jpg" alt="Cody"/>
        </section>

        <section class= "about-section" id="about-me">
            <div>
                <p>Full-stack web developer with a certificate from The University of Texas looking to transition into software engineering and web development full-time. Record store co-owner and multifaceted self-starter with over 10 years experience in the music industry leveraging creativity and knowledge of computers and technology to create high quality experiences and products. National and international tour veteran with valuable experience working collaboratively in fast-paced high-pressure environments.</p>
            </div>
        </section>

        <section class= "contact-section" id="contact-me">
        <ul>
                <li>
                    <a href="tel:713-823-xxxx" target="_blank"><button class="btn"><i class="fas fa-phone"></i></button></a>
                </li>
                <li>
                    <a href="mailto: codykimbell@gmail.com" target="_blank"><button class="btn"><i class="fas fa-envelope"></i></button></a>
                </li>
                <li>
                    <a href="https://github.com/codykimb" target="_blank"><button class="btn"><i class="fab fa-github"></i></button></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/cody-kimbell-a710671b9/" target="_blank"><button class="btn"><i class="fab fa-linkedin"></i></button></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/codykimbell/" target="_blank"><button class="btn"><i class="fab fa-instagram"></i></button></a>
                </li>
            </ul>
        </section>  
    </main>
    

  );
}

export default About;