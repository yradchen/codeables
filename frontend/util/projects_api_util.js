export const fetchProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`,
  });
};


const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/`
  });
};
