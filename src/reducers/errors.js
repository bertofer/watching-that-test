// import { List } from 'immutable'

const errors = (state = null, action) => {
  const {error} = action
  if (error) {
    return error.toString()
  } else {
    return null
  }
}

export default errors
