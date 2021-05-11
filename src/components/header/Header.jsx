import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
  const [inMobile,setInMobile] = useState(false);
  return (
    <div className="header">
      <img src="./img/logo.png" alt="logo" className="header_logo" />
      <ul className={ inMobile ? "nav_links_mobile" : "nav_links"}
      onClick = {()=>{setInMobile(false)}}
      >
        <li className="nav_items">
          <Link to="">Men</Link>
        </li>
        <li className="nav_items">
          <Link to="">Women</Link>
        </li>
        <li className="nav_items">
          <Link to="">Kids</Link>
        </li>
        <li className="nav_items">
          <Link to="">Home & Living</Link>
        </li>
        <li className="nav_items">
          <Link to="">Beauty</Link>
        </li>
      </ul>
      <div className="header_search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="header_icons">
        <Link to="">
          <div className="header_user">
            <PermIdentityIcon className="header_identity" />
            <span>Profile</span>
          </div>
        </Link>
        <Link to="">
          <div className="header_user">
            <FavoriteBorderIcon className="header_identity" />
            <span>Whislist</span>
          </div>
        </Link>
        <Link to="">
          <div className="header_user">
            <LocalMallOutlinedIcon className="header_identity" />
            <span>Bag</span>
          </div>
        </Link>
      </div>

      <div className="hamburger" onClick = {()=>{setInMobile(!inMobile)}}>
        {inMobile ? <CloseIcon/> : <ViewWeekIcon/>}
      </div>
    </div>
  );
};

export default Header;
