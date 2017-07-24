import FETCH_POSTS from '../actions'
import _ from 'lodash'

export default function(state = {}, action) {
  //default state to object
  switch (action.type) {
    case FETCH_POSTS:
      //transform returning array from the api [post1, post2] into objects{{1: post1}, {2: post2}}
      return _.mapKeys(action.payload.data, id)
      //_.mapKeys method takes in 1st argument: array, 2nd arguemnt: property that will be turn into key of the resulting objects
    default:
      return state
  }
}
