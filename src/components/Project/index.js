import React, { useState } from 'react';

const Project = () => {

  const [projects] = useState([
    {
      name: 'Now Playing: Music App',
      deployed: "https://nowplayingapp.herokuapp.com/",
      repository: "https://github.com/drewvena/now-playing",
      image: "../../assets/images/now-playing-screenshot.png",
      class: "grid-item item-1"
    },
    {
      name: 'Cinequiz: Test Your Knowledge',
      deployed: "https://drewvena.github.io/git-it-right/",
      repository: "https://github.com/drewvena/git-it-right",
      class: "grid-item item-2"
    },
    {
      name: 'Mock Tech Blog',
      deployed: "https://tech-blog-by-cody.herokuapp.com/",
      repository: "https://github.com/codykimb/MVC-tech-blog",
      class: "grid-item item-3"
    },
    {
      name: 'Photo Port',
      deployed: "https://codykimb.github.io/photo-port/",
      repository: "https://github.com/codykimb/photo-port",
      class: "grid-item item-4"
    },
    {
      name: 'Budget Tracker',
      deployed: 'https://damp-earth-27271.herokuapp.com/',
      repository: 'https://github.com/codykimb/PWA-budget-tracker',
      class: "grid-item item-5"
    },
    // {
    //   name: 'Work Day Scheduler',
    //   deployed: "https://codykimb.github.io/work-day-scheduler/",
    //   repository: "https://github.com/drewvena/now-playing",
    //   class: "grid-item item-6"
    // },
    {
      name: 'Flambot Crop: Shirt Store',
      deployed: "https://flambot-corp.herokuapp.com/",
      repository: "https://github.com/drewvena/flambot-corp",
      class: "grid-item item-6"
    },
    // {
    //   name: 'Bluebonnet Records',
    //   deployed: "https://www.bluebonnet-records.com/",
    //   repository: '',
    //   class: "grid-item item-7"
    // },
    // {
    //   name: 'Music / Production',
    //   deployed: "https://www.codykimb.com/",
    //   repository: '',
    //   class: "grid-item item-8"
    // }
  ]);

  return (
    <div class="grid-container">
        {projects.map((project) => (
            <div class={project.class}>
                <div class="grid title">
                    <h4>{project.name}</h4>
                    <h6>
                        <a href= {project.deployed} target="_blank">DEPLOYED</a>
                        <span> | </span>
                        <a href= {project.repository} target="_blank">REPOSITORY</a>
                    </h6>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Project;

