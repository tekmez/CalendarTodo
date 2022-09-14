import { CalendarActionTypes } from './constant';

export const setUser = (data) => {
  return {
    type: CalendarActionTypes.USER_NAME,
    payload: data,
  };
};
