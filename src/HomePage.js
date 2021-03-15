import React from 'react';
import {DispatchContext} from "./store";
import {ROUTES} from "./consts";

const HomePage = () => {
  const dispatch = React.useContext(DispatchContext)

  const onSignOut = React.useCallback(() => {
    dispatch({type: 'changeLocation', payload: ROUTES.LOGIN})
  }, [dispatch])

  return (
    <div>
      <h2>Hi, Marcus. </h2>
      <h3>Welcome to your home page</h3>
      <br/>
      <h5>Click it to sign out</h5>
      <button onClick={onSignOut}>Sign out</button>
    </div>
  );
};

export default React.memo(HomePage);