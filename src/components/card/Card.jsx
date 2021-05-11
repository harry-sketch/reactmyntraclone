import React from 'react';
import "../card/Card.css";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card">
          <Link to="">
              <img src={props.img} alt="card" />
          </Link>
            
        </div>
    )
}

export default Card;
