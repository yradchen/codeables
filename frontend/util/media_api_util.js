export const createMedia = (media) => {
  return $.ajax({
    method: 'POST',
    url: `api/media/`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: media
  });
};

export const fetchMedia = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/media/${id}`,
  });
};
