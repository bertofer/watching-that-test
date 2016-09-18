import {REQUEST_FEED} from '~/actions/feed'

const loadingState = (state = false, action) => {
  switch (action.type) {
    case REQUEST_FEED: return true
    default: return false
  }
}

export default loadingState
