import { createAction } from './actionCreator';

export const addTask = createAction('[REDUX][ADD_TASK]');

export const deleteTask = createAction('[REDUX][DELETE_TASK]');

export const completeTask = createAction('[REDUX][COMPLETE_TASK]');

export const editTask = createAction('[REDUX][EDIT_TASK]');
