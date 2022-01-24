import { combineReducers } from 'redux';
import user from './user/reducer';
import funuser from './functionaluser/reducer';

export default combineReducers({
  user,
  funuser,
});
