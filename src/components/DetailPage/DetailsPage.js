import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

export default function DetailsPage(props) {
	const { recipies, loading } = props;

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
				<div className="col col-right">right</div>
			</div>

      <div className="detailsPage__bottomText">
        <p>YOUR FOOD TASTES YUMMY</p>
      </div>
		</div>
	);
}
