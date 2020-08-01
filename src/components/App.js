import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home/Home';
import { FETCH_RECIPE_API } from "../constants/api";
import DetailsPage from "./DetailPage/DetailsPage";


function App() {

  const [recipies, setRecipies] = useState([]);
	const [loading, setLoading] = useState(true);
  


useEffect(()=>{
  console.log("app")
  fetch(FETCH_RECIPE_API)
  .then(res=>res.json())
  .then(data=>setRecipies(data))
  .then(_=>setLoading(false))
},[])


  return (
    <div className="container">
     <Switch>
       <Route exact path="/">
         <Home recipies={recipies} loading={loading}/>
       </Route>

       <Route path="/:id">
         <DetailsPage recipies={recipies} loading={loading}/>
       </Route>

       <Route>
         <NotFound/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
