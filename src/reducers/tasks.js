const defaultState = {
  tasks: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case '[REDUX][ADD_TASK]':
      return { ...state, tasks: [...state.tasks, action.$payload] };
    case '[REDUX][DELETE_TASK]':
      return {
        ...state,
        tasks: state.tasks.filter((el) => {
          return el.id !== action.$payload;
        }),
      };
    case '[REDUX][COMPLETE_TASK]':
      return {
        ...state,
        tasks: state.tasks.map((el) => {
          if (el.id === action.$payload) el.completed = true;
          return el;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
