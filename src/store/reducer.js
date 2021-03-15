export const initialState = {
  location: 'login'  // home || login
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case 'changeLocation': {
      return ({...state, location: payload})
    }

    default: {
      return state
    }
  }
}

export default reducer