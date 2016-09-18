import FeedsComponent from './feeds.jsx'
import {connect} from 'react-redux'


import {getFeeds} from '~/actions/feed'

const stateProps = (state) => ({
  loading: state.loadingState,
  feed: state.feed,
  items: state.items
})

const dispatchProps = (dispatch) => ({})

const FeedsContainer = connect(
  stateProps,
  dispatchProps
)(FeedsComponent)

export default FeedsContainer
