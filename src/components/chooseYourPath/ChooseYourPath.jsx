import React from "react";
import styles from "./chooseYourPath.module.scss";

const ChooseYourPath = () => {
  return (
    <div className={styles.ChooseYourPath}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
            Choose Your<span> Path</span>
          </h2>
          <p>
            Unlock Your Future: <br />
            Tailor Your Learning Journey with Our Diverse Range of Courses
          </p>
        </div>

        <div className={styles.content}>
          <table>
            <tr>
              <td>MERN Stack </td>
              <td>
                Our MERN (MongoDB, Express, React, Node.js) Stack Course is
                designed for aspiring web developers. Learn to build modern,
                dynamic web applications and gain the skills necessary for
                front-end and back-end development.
              </td>
              <td>$199</td>
            </tr>
            <tr>
              <td>Fullstack Development </td>
              <td>
                The Fullstack Course is a comprehensive program that covers both
                front-end and back-end web development. Master HTML, CSS,
                JavaScript, and server-side technologies to become a versatile
                full-stack developer.
              </td>
              <td>$299</td>
            </tr>
            <tr>
              <td>Software Testing </td>
              <td>
                Dive into the world of quality assurance with our Software
                Testing Course. Learn the principles of software testing,
                automation, and quality control to ensure the reliability of
                software applications.
              </td>
              <td>$149</td>
            </tr>
            <tr>
              <td>Java Fullstack </td>
              <td>
                Java Fullstack Development is a highly sought-after skillset.
                This course will teach you Java programming along with
                full-stack web development, providing a strong foundation for
                building Java-based web applications.
              </td>
              <td>$249</td>
            </tr>
            <tr>
              <td>Game Development </td>
              <td>
                Unleash your creativity with our Game Development Course. Learn
                to create your own interactive games from scratch. Gain
                expertise in game design, programming, and graphics.
              </td>
              <td>$199</td>
            </tr>
            <tr>
              <td>Graphic Designing </td>
              <td>
                In our Graphic Designing Course, discover the art and science of
                visual communication. Develop your skills in graphic design,
                including layout, typography, and image editing.
              </td>
              <td>$149</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPath;
