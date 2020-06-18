import React from 'react';

const Social = () => {
    return (
      <div className="yp_social_media">
        <ul>
          <li className="social_media">
            <a className="facebook" href="https://www.facebook.com">
            <i className="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li className="social_media">
            <a className="instagram" href="https://www.instagram.com">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li className="social_media">
            <a className="twitter" href="https://www.twitter.com">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li className="social_media">
            <a className="whatsapp" href="https://www.whatsapp.com">
            <i className="fa fa-whatsapp" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>  
    );
};

export default Social;