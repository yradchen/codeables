export const createInstruction = (instruction) => {
  return $.ajax({
    method: 'POST',
    url: `api/projects/`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: project
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
