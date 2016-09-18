import FormComponent from './form.jsx'
import {connect} from 'react-redux'

import {getFeedsRequest} from '~/actions/feed'

const stateProps = (state) => ({
  loading: state.loadingState
})

const dispatchProps = (dispatch) => {
  return {
    onSubmit: (value) => dispatch(getFeedsRequest(value))
  }
}

const FormContainer = connect(
  stateProps,
  dispatchProps
)(FormComponent)

export default FormContainer
