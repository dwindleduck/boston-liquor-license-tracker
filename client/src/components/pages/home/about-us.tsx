import styles from "./about-us.module.css";
import { FormattedMessage } from "react-intl";

const AboutUs = () => {
  return (
    <div className={`${styles.aboutUs}`}>
      <h2>
        <FormattedMessage id="home.aboutUs.title" />
      </h2>
      <p><FormattedMessage
          id="home.aboutUs.weAre"
          values={{ 
              b: (chunks) => <b>{chunks}</b>,
              br: <><br/><br/></>
            }}
      /></p>
    </div>
  );
};

export default AboutUs;
