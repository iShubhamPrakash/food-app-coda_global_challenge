import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Button } from "@material-ui/core";

import {Link} from 'react-router-dom'

export default function RecipeCard(props) {
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

	const {
		id,
		name,
		image,
		category,
		label,
		price,
		description,
		liked = 1,
		index,
  } = props;
  
	return (
		<div className="recipeCard">
      <div className="overlay">
        <div className="buttonContainer">
          <Button><Link to={`./${id}`}>View More</Link></Button>
          <Button>Quick View</Button>
        </div>
      </div>

      <div className="recipeCard__label">{label || "default label"}</div>
			<img className="recipeCard__image" src={image} alt={`${name}`} />
			<div
				className={`recipeCard__content ${
					index % 2 === 0 ? "black_card" : "white_card"
				}`}
			>
				<div className="header">
					<div className="name">
						<h2>{name}</h2>
						<p>
							{" "}
							<ScheduleIcon className="clock" /> 24 min
						</p>
					</div>
					<div className={liked ? "like liked-true" : "like liked-false"}>
						{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</div>
				</div>

				<div className="description">
					{/* <p>{description}</p> */}
					<p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde obcaecati soluta, odio voluptatum eius!
          </p>

				</div>
			</div>
		</div>
	);
}
