import React from 'react';
import './Style.css';
import applestore from './assets/appstore.jpg';
import playstore from './assets/playstore.png';
import windows from './assets/windows.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footerList">
          <Link to="" className="link">Home</Link><span className="line">|</span>
          <Link to="" className="link">Terms and Conditions</Link><span className="line">|</span>
          <Link to="" className="link">Privacy policy</Link><span className="line">|</span>
          <Link to="" className="link">Collection Statement</Link><span className="line">|</span>
          <Link to="" className="link">Help</Link><span className="line">|</span>
          <Link to="" className="link">Manage Account</Link>
      </div>
      <div className="copyright">
        <p>Copyright 2016 DEMO Streaming. All Rights Reserved</p>
      </div>
      <div className="socialMediaIcon">
        <div className="socialLeft">
          <i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;
          <i className="fa fa-twitter"></i>&nbsp;&nbsp;
          <i className="fa fa-instagram"></i>
        </div>
        <div className="socialRight">
          <Link to="" className="imageLink"><img src={applestore} alt="App Store" />&nbsp;&nbsp;</Link>
          <Link to="" className="imageLink"><img src={playstore} alt="Google Play" />&nbsp;&nbsp;</Link>
          <Link to="" className="imageLink"><img src={windows} alt="Microsoft" />&nbsp;&nbsp;</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;