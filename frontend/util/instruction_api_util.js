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
  const id = parseInt(instruction.get("instruction[id]"));
  return $.ajax({
    method: 'PATCH',
    url: `api/instructions/${id}`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: instruction
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
