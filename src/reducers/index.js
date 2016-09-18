import { combineReducers } from 'redux'

import feed from './feed'
import errors from './errors'
import loadingState from './loading'
import items from './items'


const Reducers = combineReducers({
  feed,
  errors,
  loadingState,
  items
})

export default Reducers
