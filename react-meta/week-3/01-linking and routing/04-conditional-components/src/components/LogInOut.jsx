import React from 'react'
import LogOutButton from './logOutButton';
import LogInButton from './LogInButton';


function LogInOut(props) {
  const isLoggedIn = props.isLoggedIn; 

  if(isLoggedIn) {
    return <LogOutButton />
  } else {
    return <LogInButton />
  }
}

export default LogInOut