export const createInstruction = (instruction) => {
  return $.ajax({
    method: 'POST',
    url: `api/instructions/`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: instruction
  });
};

export const updateInstruction = (instruction) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/instructions/${instruction.id}`,
    dataType: 'json',
    data: { instruction }
  });
};

export const fetchInstruction = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/instructions/${id}`,
  });
};

export const deleteInstruction = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/instructions/${id}`
  });
};
