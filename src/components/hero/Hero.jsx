import styles from "./hero.module.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>
          Learn <br />
          The <span>Future</span>
        </h1>
        <div className={styles.subtitle}>
          <div className={styles.left}>
            <p>
              Welcome to Course Plus, where we're dedicated to unlocking
              knowledge and empowering students with the best courses at
              unbeatable prices. Our mission is to provide an affordable gateway
              to premier education, ensuring that every learner has access to
              quality courses that fit their needs and budget. Join us on your
              journey to affordable, high-quality education with Course Plus.
            </p>
            <button>
              Try for free{" "}
              <BsFillArrowRightCircleFill className={styles.icon} />
            </button>
          </div>

          <h2>Way</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
