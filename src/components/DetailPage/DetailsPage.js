import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "@material-ui/core";

const startCount = 4;

export default function DetailsPage(props) {
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setrice] = useState("")


	useEffect(() => {
  const { recipies, loading } = props;

  if(!loading){
    const id= props.match.params.id;
    const getrecipi = recipies.filter(rec=>parseInt(rec.id)=== parseInt(id))
    console.log(getrecipi)
    const thisRecepi = getrecipi[0]
    setName(thisRecepi.name)
    setDescription(thisRecepi.description)
    setrice(thisRecepi.price)
  }
	
	}, [])

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

	// const name = "hello world";
	// const description =
	// 	"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolore iste deleniti unde ratione tenetur.";
	// const price = 5.5;


	return (
		<div className="detailsPage">
			<div className="detailsPage__goBack">
				<Link to="/">
					<ArrowBackIcon /> &nbsp; Go Back
				</Link>
			</div>
			<div className="detailsPage__row">
				<div className="col col-left">
					<div className="videoContainer">
						<iframe
							title="video"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/VC4rdjT_ySI"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>

					<div className="ingredient">
						<h3>Ingredients:</h3>
						<p>
							{" "}
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium, quam sed culpa repellendus modi adipisci, nemo neque
							consequuntur eos magni distinctio dolor architecto quibusdam
							obcaecati vero animi temporibus quos. Omnis assumenda, ut at est
							vitae debitis, neque hic culpa similique eius enim repudiandae
							adipisci architecto molestiae quam quisquam, sapiente nam?
						</p>
					</div>

					<dov className="howTo">
						<h3>How To prepare:</h3>
						<p>
							{" "}
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium, quam sed culpa repellendus modi adipisci, nemo neque
							consequuntur eos magni distinctio dolor architecto quibusdam
						</p>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
							animi officiis saepe. Fugit, in beatae.
						</p>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatem nostrum, recusandae error natus vitae eveniet ex
							impedit nulla ut quia. Voluptatem nostrum, recusandae error natus
							vitae eveniet ex impedit nulla ut quia.
						</p>
					</dov>
				</div>
				<div className="col col-right">
					<div className="info">
						<p className="header">RECIPE</p>
						<h1>{name}</h1>
						<div className="starts">
							<span>{`${startCount}/5`} &nbsp;</span>
							{[1, 2, 3, 4].map((i) => (
								<StarIcon key={i} />
							))}
						</div>

						<p className="header">DESCRIPTION</p>

						<div className="description">
							<p>{description}</p>
						</div>
					</div>

					<div className="points">
						<div className="point">
							<p>{"8"}</p>
							<p className="name">{"Ingredients"}</p>
						</div>
						<div className="point">
							<p>{price}</p>
							<p className="name">{"Bucks"}</p>
						</div>
						<div className="point">
							<p>{"25"}</p>
							<p className="name">{"Min"}</p>
						</div>
					</div>

					<div className="fav">
						<p>FAVOURITE THIS RECIPE </p> &nbsp;<FavoriteIcon />
					</div>

          <div className="contact">
            <p className="header">ADD COMMENTS</p>
              <input type="textare" rows="4" placeholder="Type something here..."/>
              <Button>Add Comment</Button>
					</div>
				</div>
			</div>

			<div className="detailsPage__bottomText">
				<p>YOUR FOOD TASTES YUMMY</p>
			</div>
		</div>
	);
}
