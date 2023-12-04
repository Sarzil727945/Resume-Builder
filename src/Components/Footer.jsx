import React from "react";

// styles
import styles from "../Sass/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy; All Right Reserved by
        <a href="https://sarzilmuntaha.netlify.app/"> Sarzil Muntaha</a>
      </p>
    </div>
  );
};

export default Footer;
