import React from 'react';
import resume from '../../assets/docs/Coding-Resume.pdf'

function Resume() {
  return (
    <main>
        <section class="resume about-section">
            <a href={resume} download>
              <h5 class="dl-link">Full Resume Download</h5>
            </a>
            <h2 class="resume-item">Technical Skills</h2>
            <ul class="resume-item">
                <li>Languages: JavaScript, jQuery, HTML, CSS, SQL
                </li>
                <li>Applications: GitHub, MySQL, NoSQL
                </li>
                <li>Tools: MongoDB, Express.js, React, Node.js, Bootstrap, Handlebars
                </li>
            </ul>
            <h2 class="resume-item">Education</h2>
            <ul class="resume-item">
                <li>Certificate in Full Stack Web Development from The University of Texas
                </li>
                <li>Certificate in Business Foundations from The University of Texas
                </li>
                <li>Bachelor of Arts in Music from The University of Texas
                </li>
            </ul>
            <h2 class="resume-item">Experience</h2>
            <ul class="resume-item">
                <li>Bluebonnet Records - Owner <i>(2019-present)</i>
                </li>
                <li>Round Rock ISD - Music Teacher <i>(2017-2018)</i>
                </li>
                <li>ACL Live @ The Moody Theater - Box Office <i>(2014-2016)</i>
                </li>
            </ul>
        </section>
    </main>
    

  );
}

export default Resume;