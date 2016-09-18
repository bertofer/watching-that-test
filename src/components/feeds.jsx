import React, {Component} from 'react'
import ItemComponent from './item.jsx'

class FeedsComponent extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='columns'>
        <div className='column is-8 is-offset-2'>
          {
            this.props.items.map(item => (<ItemComponent item={item} key={item.guid}/>) )
          }
        </div>
      </div>
    )
  }

}

export default FeedsComponent
