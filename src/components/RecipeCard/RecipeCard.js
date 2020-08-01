import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
		liked = false,
	} = props;
	return (
		<div className="recipeCard">
			<img className="recipeCard__image" src={image} alt={`${name}`} />
			<div className="recipeCard__content">
				<div className="header">
					<div className="name">
						<h2>{name}</h2>
						<p>
							{" "}
							<img className="clock" src={"./clock-regular.svg"} alt="" /> 24
							min
						</p>
					</div>
					<div className=	{liked ? "like liked-true" : "like liked-false"}>
						{liked ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
					</div>
				</div>

				<div className="description">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}
