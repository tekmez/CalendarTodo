import { CalendarActionTypes } from './constant';

const initialState = {
  userName: '',
};
const Calendar = (state = initialState, action) => {
  switch (action.type) {
    case CalendarActionTypes.USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
export default Calendar;
