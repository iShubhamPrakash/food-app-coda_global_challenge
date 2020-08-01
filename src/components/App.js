import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';


function App() {
  return (
    <div className="app">
     <Switch>
       <Route exact path="/">
         hi
       </Route>

       <Route>
         <NotFound/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
