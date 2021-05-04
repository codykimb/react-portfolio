import React from 'react';

function Portfolio() {

  return (
    <section class="work-section" id="work">
        <div class="grid-container">
            <a href= "https://nowplayingapp.herokuapp.com/" target="_blank" class="grid-item item-1">
                <h4>Now Playing: Music App</h4>
            </a>
            <a href= "https://drewvena.github.io/git-it-right/" target="_blank" class="grid-item item-2">
                <h4>Cinequiz: Test Your Knowledge</h4>
            </a>
            <a href= "https://tech-blog-by-cody.herokuapp.com/"  target="_blank" class="grid-item item-3">
                <h4>Mock Tech Blog</h4>
            </a>
            <a href= "https://www.bluebonnet-records.com/" target="_blank" class="grid-item item-4">
                <h4>Bluebonnet Records</h4>
            </a>
            <a href= "https://www.codykimb.com/" target="_blank" class="grid-item item-5">
                <h4>Music / Production</h4>
            </a>
            <a href= "https://codykimb.github.io/work-day-scheduler/" target="_blank" class="grid-item item-6">
                <h4>Work Day Scheduler</h4>
            </a>
            {/* <div class="grid-item item-7"></div> */}
        </div>

    </section>
  );
}

export default Portfolio;