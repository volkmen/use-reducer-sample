import React from 'react';
import {DispatchContext} from "./store";
import {ROUTES} from "./consts";

const LoginPage = () => {
  const dispatch = React.useContext(DispatchContext)

  const onSignIn = React.useCallback(() => {
    dispatch({type: 'changeLocation', payload: ROUTES.HOME})
  }, [dispatch])

  return (
    <div>
      <h2>
        Hi, click button to sign in
      </h2>
      <button  onClick={onSignIn}>SIGN IN</button>
    </div>
  );
};

export default React.memo(LoginPage);