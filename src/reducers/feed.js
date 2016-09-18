import { Map } from 'immutable'
import {REQUEST_FEED, REQUEST_FEED_OK} from '~/actions/feed'

const feed = (state = Map(), action) => {
  switch (action.type) {
    case REQUEST_FEED:
      // New feed requested, delete info
      return Map()
    case REQUEST_FEED_OK:
      // new feed info
      return Map(action.feed)
    default: return state
  }
}

export default feed
