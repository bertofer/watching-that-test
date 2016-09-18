import React, {Component} from 'react'

const cursorPointer = {
  cursor: 'pointer'
}

class ItemComponent extends Component {
  render () {
    return (
      <div className='message' style={cursorPointer} onClick={this.openLink.bind(this)}>
        <div className='message-body'>
          <article className="media">
          <figure className="media-left">
            <p className="image is-32x32">
              <img src={this.props.item.thumbnail} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.item.author}</strong>
                <br />
                <div dangerouslySetInnerHTML={this.itemHtml()}></div>
              </p>
            </div>
          </div>
        </article>
        </div>
      </div>
    )
  }

  itemHtml () {
    return {
      __html: this.props.item.description
    }
  }

  openLink () {
    window.open(this.props.item.link, '_blank');
  }
}

export default ItemComponent
