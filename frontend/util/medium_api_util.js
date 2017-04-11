export const createMedium = (medium) => {

  return $.ajax({
    method: 'POST',
    url: `api/media/`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: medium
  });
};

export const fetchMedium = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/media/${id}`,
  });
};

export const updatehMedium = (medium) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/media/${medium.id}`,
    date: { medium }
  });
};

// never use fetchInstruction.
// need to provide mediable_type and mediable_id when using find_by
