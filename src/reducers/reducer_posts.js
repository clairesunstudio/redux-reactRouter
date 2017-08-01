import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

export default function(state = {}, action) {
  //default state to object
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload)
    case FETCH_POSTS:
      //transform returning array from the api [post1, post2] into objects{{1: post1}, {2: post2}}
      return _.mapKeys(action.payload.data, "id")
      //_.mapKeys method takes in 1st argument: array, 2nd arguemnt: property that will be turn into key of the resulting objects
    case FETCH_POST:
      // const post = action.payload.data
      // const newState = { ...state }
      // newState[post.id] = post
      // return NewState
      //ES5
      return { ...state, [action.payload.data.id]: action.payload.data } //[] key interpollation to add addtional key: value oject to the collection
      break;

    default:
      return state
  }
}
