import React from "react";
import styles from "./getInTouch.module.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>GET in touch</h2>
        </div>
        <div className={styles.contact}>
          <p>
            Have questions or suggestions? Feel free to react out to us, we're
            here to assist you
          </p>
          
          <button>
            Try for Free <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
