import React, { useState } from 'react';
import '../styles/footer.scss';

const Footer = () => (
  <footer className="footer">
    <p>
      <a className="logo" href="https://rs.school/js/">
        <img src="https://rs.school/images/rs_school_js.svg" width="70" height="25" alt="">
        </img></a>
      <span>2020 © Covid Dashboard</span>
      <a href="https://github.com/mary-jane77" className="stats">mary-jane77</a>
      <a href="https://github.com/Luck8989" className="stats">Luck8989</a>
    </p>
  </footer>
);

export default Footer;
