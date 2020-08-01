import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home/Home';
import { FETCH_RECIPE_API } from "../constants/api";
import DetailsPage from "./DetailPage/DetailsPage";
import fallbackData from "../constants/fallbackApiData";

function App() {

  const [recipies, setRecipies] = useState([]);
	const [loading, setLoading] = useState(true);
  

useEffect(()=>{
  console.log("app")
  fetch(FETCH_RECIPE_API)
  .then(res=>res.json())
  .then(data=>{
    if(!data) setRecipies(fallbackData)
    setRecipies(data)
  })
  .then(_=>setLoading(false))
  .catch(e=>{
    setRecipies(fallbackData)
    setLoading(false)
  })
},[])


  return (
    <div className="container">
     <Switch>
       <Route exact path="/">
         <Home recipies={recipies} loading={loading}/>
       </Route>

       <Route path="/:id">
         <Route path="/:id" component={(routerParams)=><DetailsPage recipies={recipies} loading={loading} {...routerParams}/>} />
       </Route>

       <Route>
         <NotFound/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
