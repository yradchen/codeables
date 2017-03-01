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

export const fetchSpecificProjects = (project) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/`,
    data: { project }
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
    dataType: 'json',
    data: project
  });
};

export const updateProject = (project) => {
  const id = parseInt(project.get("project[id]"));
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${id}`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: project
  });
};
