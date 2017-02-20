import React from 'react';
import ProjectIndexContainer from '../projects/project_index_container';

const Homepage = (children) => {
  return (
    <main>
      <img src={images.splash} alt="splash" className="splash"/>
      <ProjectIndexContainer/>
    </main>
  );

};

export default Homepage;
