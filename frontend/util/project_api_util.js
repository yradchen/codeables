export const fetchProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`,
  });
};

export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/`
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`
  });
};

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: `api/projects/`,
    contentType: false,
    processData: false,
    data: { project }
  });
};

export const updateProject = (project) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.id}`,
    contentType: false,
    processData: false,
    data: { project }
  });
};
