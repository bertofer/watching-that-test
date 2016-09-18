import request from 'browser-request'

const API_URL = 'http://rss2json.com/api.json?rss_url='

export const REQUEST_FEED = 'REQUEST_FEEDS'
export const REQUEST_FEED_ERROR = 'REQUEST_FEEDS_ERROR'
export const REQUEST_FEED_OK = 'REQUEST_FEED_OK'

export function getFeeds () {
  return {
    type: REQUEST_FEED
  }
}

export function getFeedsOk (feed, items) {
  return {
    type: REQUEST_FEED_OK,
    feed,
    items
  }
}

export function getFeedsError (error) {
  return {
    type: REQUEST_FEED_ERROR,
    error
  }
}

// let currentRequest // Will be used to cancel pending requests

export function getFeedsRequest (url) {
  return dispatch => {
    // Dispatch that we are loading feeds
    dispatch(getFeeds())

    const apiUrl = `${API_URL}${encodeURIComponent(url)}`

    request(apiUrl, (err, resp, body) => {
      if (err) dispatch(getFeedsError(err))
      else {
        const feed = JSON.parse(body)
        dispatch(getFeedsOk(feed.feed, feed.items))
      }
    })
  }
}
