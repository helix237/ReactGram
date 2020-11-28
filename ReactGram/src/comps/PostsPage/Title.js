import React from 'react';
import { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

const Title = () => {
const history = useHistory()

const signOutHandler = ()=>{
  auth.signOut();
  history.push('/');
}

return (
  <div className="title">
    <h1>ReactGram</h1>
    <h2>Your Posts</h2>
    <button className="signOutButton" onClick={signOutHandler}>Signout</button>
  </div>
)
}

export default Title;