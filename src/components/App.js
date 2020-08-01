import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home/Home';


function App() {
  return (
    <div className="container">
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>

       <Route>
         <NotFound/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
