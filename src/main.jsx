import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// Reducers
import Reducers from './reducers'

// App component
import App from './components/app.jsx'

let store = createStore(
    Reducers,
    applyMiddleware(thunk)
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)
