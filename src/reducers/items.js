import { List } from 'immutable'
import { REQUEST_FEED_OK, REQUEST_FEED_ERROR } from '~/actions/feed'

const items = (state = List(), action) => {
  console.log(action)
  switch (action.type) {
    case REQUEST_FEED_OK:
      console.log(action.items)
      return List(action.items)
    case REQUEST_FEED_ERROR:
      return List()
    default: return state
  }
}

export default items
