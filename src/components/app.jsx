// entry.js
import React from 'react'
import ReactDOM from 'react-dom'

// import component containers
import FormContainer from './form.container.jsx'
import FeedsContainer from './feeds.container.jsx'
// import bulma styles and other styles
import 'bulma/bulma.sass'
// import '../../styles/app.scss'

class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <FormContainer />
        <FeedsContainer />
      </div>
    )
  }

}

export default App
