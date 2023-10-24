import styles from "./methods.module.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Methods = () => {
  return (
    <div className={styles.methods}>
      <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.card}>
            <img src="/method-1.png" alt="innovative teaching methods" />
            <div className={styles.content}>
              <div className={styles.title}>
                <h3>Innovative teaching methods</h3>
                <p>Revolutionizing Education for Tomorrow's Learners</p>
                <button>
                  Start Learning{" "}
                  <BsFillArrowRightCircleFill className={styles.icon} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/method-2.png" alt="Interactive content" />
            <div className={styles.content}>
              <div className={styles.title}>
                <h3>Interative content</h3>
                <p>Elevating Learning Through Engaging Experiences</p>
                <button>
                  Start Learning{" "}
                  <BsFillArrowRightCircleFill className={styles.icon} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.card}>
            <img src="/method-3.png" alt="Access anytime & anywhere" />
            <div className={styles.content}>
              <div className={styles.title}>
                <h3>Access anytime & anywhere</h3>
                <p>
                  Discover the unparalleled convenience of learning with Course
                  Plus. Our commitment to providing access anytime & anywhere
                  means you can unlock learning opportunities wherever you are.
                
                </p>
                <button>
                  Start Learning{" "}
                  <BsFillArrowRightCircleFill className={styles.icon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methods;
