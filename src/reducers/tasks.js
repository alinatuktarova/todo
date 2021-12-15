const defaultState = {
  tasks: [],
};

const reducer = (state = defaultState, action = {}) => {
  let completed = false;
  let text = '';
  switch (action.type) {
    case '[REDUX][ADD_TASK]':
      return { ...state, tasks: [...state.tasks, action.$payload] };
    case '[REDUX][DELETE_TASK]':
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.$payload),
      };
    case '[REDUX][COMPLETE_TASK]':
      return {
        ...state,
        tasks: state.tasks.map((el) => {
          completed = !!el.completed;
          if (el.id === action.$payload) completed = true;
          return {
            ...el,
            completed,
          };
        }),
      };
    case '[REDUX][EDIT_TASK]': {
      return {
        ...state,
        tasks: state.tasks.map((el) => {
          text = el.text;
          if (el.id === action.$payload.id) text = action.$payload.text;
          return {
            ...el,
            text,
          };
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
