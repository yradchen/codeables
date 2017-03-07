import React from 'react';
import ProjectIndexContainer from '../projects/project_index_container';

const Homepage = (children) => {
  return (
    <main>
      <img src=	"https://s3.amazonaws.com/codeables-DEV/code_projects.jpg" alt="splash" className="splash"/>
      <ProjectIndexContainer/>
    </main>
  );

};

export default Homepage;
