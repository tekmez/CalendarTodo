import { CalendarActionTypes } from './constant';

export const setUser = (data) => {
  return {
    type: CalendarActionTypes.USER_NAME,
    payload: data,
  };
};
export const setUpdateTodo = (data) => {
  return {
    type: CalendarActionTypes.UPDATE_TODO,
    payload: data,
  };
};
