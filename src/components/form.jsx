import React from 'react'

class FormComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'https://github.com/bertofer.atom'
    }
  }

  render () {
    return (
      <div  className='columns'>
        <form onSubmit={this.onFormSubmit.bind(this)} className='column is-8 is-offset-2'>
          <label className='label'> Feed url </label>
          <p className='control'>
            <input className='input' type='text'
              placeholder='Enter atom feeds url'
              onChange={this.handleChange.bind(this)}
              value={this.state.value}/>
          </p>
          <p className='control'>
            <input type='submit' value='Load feed' className='button is-primary' />
          </p>
        </form>
      </div>
    )
  }

  handleChange (e) {
    this.setState({value: e.target.value});
  }

  onFormSubmit (e) {
    this.props.onSubmit(this.state.value)
    e.preventDefault()
  }
}

export default FormComponent
