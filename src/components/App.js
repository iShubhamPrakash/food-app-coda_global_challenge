import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import { FETCH_RECIPE_API } from "../constants/api";
import DetailsPage from "./DetailPage/DetailsPage";
import fallbackData from "../constants/fallbackApiData";
import Search from "./Search/Search";

function App() {
	const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([])
  

	useEffect(() => {
		console.log("app");
    fetchData()
  }, []);
  
  useEffect(() => {
    const values = recipies.filter(recipi => recipi.name.toLowerCase().includes(value.toLowerCase()))
    setSearchResults([...values]) 
  }, [value])

  const onChange = (e)=>{
    setValue(e.target.value)
  }

  const clearValue=()=>{
    setValue("")
  }

  const fetchData=()=>{
		fetch(FETCH_RECIPE_API)
			.then((res) => res.json())
			.then((data) => {
				if (!data) setRecipies(fallbackData);
				setRecipies(data);
			})
			.then((_) => setLoading(false))
			.catch((e) => {
				setRecipies(fallbackData);
				setLoading(false);
			});
  }


	return (
		<div className="container">
			<Search value={value} onChange={onChange} clearValue={clearValue}/>
			<Switch>
				<Route exact path="/">
					<Home recipies={value.length? searchResults : recipies } loading={loading} value={value}/>
				</Route>

				<Route path="/:id">
					<Route
						path="/:id"
						component={(routerParams) => (
							<DetailsPage
								recipies={recipies}
                loading={loading}
								{...routerParams}
							/>
						)}
					/>
				</Route>

				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
