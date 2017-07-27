import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer  //must pass formReducer to form key
});

export default rootReducer;
