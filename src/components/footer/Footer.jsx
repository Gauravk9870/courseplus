import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/favicon.png" alt="logo" />
          <h2>Course+</h2>
          <p>Learn in your own way</p>
        </div>

        <ul className={styles.links}>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Privacy policy</li>
          <li>Cookies</li>
        </ul>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} CoursePlus. All Rights Reserved.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
