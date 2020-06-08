import React from 'react';
import './Style.css';


function Header() {
  return (
    <div className="mainHeader">
      <div className="header">
          <span className="headerName">DEMO Streaming</span>
          <div className="rightHeader">
              <span className="login">Log in</span>&nbsp;
              <span className="freeTrial">Start your free trial</span>
          </div>
      </div>
    </div>
  );
}

export default Header;
