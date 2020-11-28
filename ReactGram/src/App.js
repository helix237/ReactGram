import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { auth } from './firebase/config';
import PostPage from './comps/PostsPage/PostPage';
import Login from './comps/Login/Login';

function App() {
  const [user,setUser]=useState(null);
  const unsub = useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          setUser(authUser);
        }else{
          setUser(null);
        }
        return () =>  unsub();
      })
    },[user])

  let routes = (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/gallery" exact component={PostPage} />
      <Redirect to="/gallery" />
    </Switch>
  );
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default withRouter(App);
