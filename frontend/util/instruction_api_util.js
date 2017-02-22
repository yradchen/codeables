export const createInstruction = (instruction) => {
  debugger
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
