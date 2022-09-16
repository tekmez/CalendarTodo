import { CalendarActionTypes } from './constant';

const initialState = {
  userName: '',
  updateTodo: null,
};
const Calendar = (state = initialState, action) => {
  switch (action.type) {
    case CalendarActionTypes.USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case CalendarActionTypes.UPDATE_TODO:
      return {
        ...state,
        updateTodo: action.payload,
      };
    default:
      return state;
  }
};
export default Calendar;
