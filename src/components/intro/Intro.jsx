import React from 'react';
import {Link} from "react-router-dom";
import "../intro/Intro.css";

const Intro = () => {
    return (
        <div className="intro">
            <Link to="">
                <img src="./img/intro.jpg" alt="intro" />
            </Link>
        </div>
    )
}

export default Intro;
