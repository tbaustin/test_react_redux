import _ from 'lodash';

//Books reducer
export default function(state={}, action) {
  switch(action.type) {
    case "GET_BOOK":
      return _.mapKeys(action.payload, '_id');
    break;
    case "DELETE_BOOK":
      return _.omit(state, action.payload);
    break;
    case "UPDATE_BOOK":
      let updates = {[action.payload._id]: action.payload};
      return _.merge(state, updates);
    break;
    case "POST_BOOKS":
      let item = action.payload;
      return {...state, item};
    break;
  }
  return state
}
