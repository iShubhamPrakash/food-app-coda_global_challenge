import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';


export default function DetailsPage(props) {
  const {
    recipies,
    loading
  } = props;

  return (
    <div className="detailsPage">
      <div className="detailsPage__goBack">
        <Link to="/"><ArrowBackIcon/> &nbsp; Go Back</Link>
      </div>
      <div className="detailsPage__row">
        <div className="col col-left">
          left
        </div>
        <div className="col col-right">
          right
        </div>
      </div>
    </div>
  )
}
