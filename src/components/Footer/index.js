import React from 'react';

function Footer() {

  return (
    <footer class= "contact-section" id="contact-me">
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
        </footer> 
  );
}

export default Footer;

 