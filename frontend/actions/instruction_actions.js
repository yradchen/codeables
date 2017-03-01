export const RECEIVE_ALL_INSTRUCTIONS = 'RECEIVE_ALL_INSTRUCTION';
export const RECEIVE_INSTRUCTION = 'RECEIVE_INSTRUCTION';
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION';
import * as InstructionAPIUtil from '../util/instruction_api_util';

const receiveInstruction = (instruction) => ({
  type: RECEIVE_INSTRUCTION,
  instruction
});

const receiveAllInstructions = (instructions) => ({
  type: RECEIVE_ALL_INSTRUCTIONS,
  instructions
});

const removeInstruction = (instruction) => ({
  type: REMOVE_INSTRUCTION,
  instruction
});

export const deleteInstruction = (id) => dispatch => (
  InstructionAPIUtil.deleteInstruction(id).then(
    instruction => dispatch(removeInstruction(instruction))
  )
);


export const createInstruction = (instruction) => dispatch => (
  InstructionAPIUtil.createInstruction(instruction).then(
    instruction => dispatch(receiveInstruction(instruction))
  )
);

export const updateInstruction = (instruction) => dispatch => (
  InstructionAPIUtil.updateInstruction(instruction).then(
    instruction => dispatch(receiveInstruction(instruction))
  )
);


export const fetchInstruction = (id) => dispatch => (
  InstructionAPIUtil.fetchInstruction(id).then(
    instruction => dispatch(receiveInstruction(instruction))
  )
);
