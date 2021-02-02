import React from 'react';

import {Link} from 'react-router-dom';

const Footer = () => {
  return(
    <section className='footer-container'>
      <div className='nav-footer'>
        <Link className="footerLink" to='/'>home</Link>
        <Link className="footerLink" to='/recipes'>recipes</Link>
      </div><br />
      <div>
        <h6 className='end-quote'>exploring desert life on the west coast</h6>
      </div>
    </section>
  );
}

export default Footer;