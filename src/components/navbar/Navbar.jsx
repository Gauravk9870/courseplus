import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="course-plus-logo" />
          </div>
          <ul className={styles.links}>
            <li>About us</li>
            <li>courses</li>
            <li>teachers</li>
            <li>contacts</li>
          </ul>
          <div className={styles.btn}>
            <button>Lets try</button>
          </div>

          <div
            className={`${styles["menu-btn"]} ${isOpen ? styles.animate : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className={styles.mobile}>
          <ul className={styles.links}>
            <li>About us</li>
            <li>courses</li>
            <li>teachers</li>
            <li>contacts</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
