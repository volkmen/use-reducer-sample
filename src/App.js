import React from 'react'
import {DispatchContext, StateContext, reducer, initialState} from "./store";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div>
          {state.location === 'home' && <HomePage />}
          {state.location === 'login' && <LoginPage />}
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default App;
