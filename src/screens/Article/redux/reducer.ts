//Immer is recommed method for creating reducers
import produce from 'immer';

// Reducer with initial state
const INITIAL_STATE = {};
//
const articleReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case '':
        break;
      default:
        break;
    }
  });

export default articleReducer;
