import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { CircularProgress } from "@material-ui/core";
import Search from "../Search/Search";

export default function Home(props) {

  const {
    recipies,
    loading,
    value
  } = props;


/*
 ---------  Recipie shema:
{
  "id":0,
  "name":"Uthappizza",
  "image":"https://i.imgur.com/tDnjTXf.jpg",
  "category":"mains",
  "label":"Hot",
  "price":"4.99",
  "description":"A unique combination of Indian Uthappam (pancake) and Italian pizza"
}
*/

	return (
		<div className="home">
			<div className="home__header" style={value.length? {opacity:"0"} : null }>
				<p className="category">Category</p>
				<h1 className="categoryName">Pizza & Noodles</h1>
			</div>

      <div className="home__cardContainer">
        { ! loading?
        recipies.map((recipe,index)=>(
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            category={recipe.category}
            label={recipe.label}
            price={recipe.price}
            description={recipe.description}
            index={index}
        />
        )):
        <CircularProgress color="secondary" />
        }
      </div>
		</div>
	);
}
