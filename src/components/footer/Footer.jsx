import React from "react";
import "../footer/Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="footer_first">
          <div className="footer_first_one">
            <h5 className="footer_heading">Online Shopping</h5>
            <ul className="footer_links">
              <li className="footer_items">
                <a href="#">Men</a>
              </li>
              <li className="footer_items">
                <a href="#">Women</a>
              </li>
              <li className="footer_items">
                <a href="#">Kids</a>
              </li>
              <li className="footer_items">
                <a href="#">Home & Living</a>
              </li>
              <li className="footer_items">
                <a href="#">Beauty</a>
              </li>
              <li className="footer_items">
                <a href="#">Cards</a>
              </li>
              <li className="footer_items">
                <a href="#">
                  Myntra Inside <span className="footer_items_span">New</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_first_one">
            <h5 className="footer_heading">Useful Links</h5>
            <ul className="footer_links">
              <li className="footer_items">
                <a href="#">Contact Us</a>
              </li>
              <li className="footer_items">
                <a href="#">FAQ</a>
              </li>
              <li className="footer_items">
                <a href="#">T&C</a>
              </li>
              <li className="footer_items">
                <a href="#">Terms of use</a>
              </li>
              <li className="footer_items">
                <a href="#">Track orders</a>
              </li>
              <li className="footer_items">
                <a href="#">Shipping</a>
              </li>
              <li className="footer_items">
                <a href="#">Cancellation</a>
              </li>
              <li className="footer_items">
                <a href="#">Returns</a>
              </li>
              <li className="footer_items">
                <a href="#">Whitehat</a>
              </li>
              <li className="footer_items">
                <a href="#">Blogs</a>
              </li>
              <li className="footer_items">
                <a href="#">Careers</a>
              </li>
              <li className="footer_items">
                <a href="#">Privavy Policy</a>
              </li>
              <li className="footer_items">
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer_first_one">
            <h5 className="footer_heading">Experience Myntra App on Online</h5>
            <div className="footer_img">
              <img src="./img/demo1.png" alt="demo" className="demo" />
              <img src="./img/demo.png" alt="demo"  className="demo"/>
            </div>
            <h5 className="footer_heading">Keep in Touch</h5>

            <a href="">
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <InstagramIcon />
            </a>
          </div>
          <div className="footer_second">
            <div className="inside_footer_second">
              <img src="./img/original.png" alt="original" />
              <div>
                <p>
                  <span>100% ORIGINAL</span> gurantee
                </p>
                <p>for all products at myntra.com</p>
              </div>
            </div>
            <div className="inside_footer_second">
              <img src="./img/return.png" alt="original" />
              <div>
                <p>
                  <span>Return within 30 days</span> gurantee
                </p>
                <p>for all products at myntra.com</p>
              </div>
            </div>
            <div className="inside_footer_second">
              <img src="./img/truck.png" alt="original" />
              <div>
                <p>
                  <span>Get free delivery</span> gurantee
                </p>
                <p>for all products at myntra.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_middle">
          <h5 className="footer_heading footer_middle_head">
            Popular Searches
          </h5>
          <a href="#" className="footer_middle_links">Makeup</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Dressers For Girls</a> <span> | </span> 
          <a href="#" className="footer_middle_links">T-Shirts</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Sandles</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Babydolls</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Blzer For Men</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Handbags</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Ladies Watches</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Bags</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Sport Shoes</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Reebok Shoes</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Puma</a> <br/> 
          <a href="#" className="footer_middle_links">Shoes</a> <span> | </span>
          <a href="#" className="footer_middle_links">Boxers</a> <span> | </span>
          <a href="#" className="footer_middle_links">Wallets</a> <span> | </span>
          <a href="#" className="footer_middle_links">Tops</a> <span> | </span>
          <a href="#" className="footer_middle_links">Earnigs</a> <span> | </span>
          <a href="#" className="footer_middle_links">Fastrack Watches</a> <span> | </span>
          <a href="#" className="footer_middle_links">Kurtis </a> <span> | </span>
          <a href="#" className="footer_middle_links">Nike</a> <span> | </span>
          <a href="#" className="footer_middle_links">Smart Watches</a> <span> | </span>
          <a href="#" className="footer_middle_links">Titan Watches</a> <span> | </span>
          <a href="#" className="footer_middle_links">Designer Blouse</a> <span> | </span>
          <a href="#" className="footer_middle_links">Gowns</a> <span> | </span>
          <a href="#" className="footer_middle_links">Rings</a> <span> | </span>
          <a href="#" className="footer_middle_links">Cricket Shoes</a> <span> | </span>
          <a href="#" className="footer_middle_links">Eye Makeup</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span> 
          <a href="#" className="footer_middle_links">Photo Frame</a> <br/>
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span>
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span>
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span>
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span>
          <a href="#" className="footer_middle_links">Photo Frame</a> <span> | </span>
          <a href="#" className="footer_middle_links">Photo Frame</a> 

           <div className="footer_middle_para">
             <p>In case of any concern, <a href="">Contact Us</a></p>
             <p>&copy; {year} www.myntra.com.All rights reserved.</p>
           </div>
           <hr/>
           <div className="footer_last">
           <div>
             <h5 className="footer_heading">Registered Office Address</h5>
             <p>Building Alyssa,</p>
             <p>Begonia and Clover situated in Embassy Tech Village,</p>
             <p>Outer Ring Road,</p>
             <p>Devarabeesanahalli Village,</p>
             <p>Varthur Hobli,</p>
             <p>Bengaluru - 560130,India</p>
             </div>
             <div className="footer_last_inside">
               <p>CIN: U72300KA2007PTC041799</p>
               <p>Telephone: <a href="">+91-80-61561999</a></p>
             </div>
             
           </div>
           <hr/>
        </div>
      </div>
    </>
  );
};

export default Footer;
