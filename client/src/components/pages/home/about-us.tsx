import styles from "./about-us.module.css";
import { FormattedMessage } from "react-intl";

const AboutUs = () => {
  return (
    <div className={`${styles.aboutUs}`}>
      <h1>
        <FormattedMessage id="home.aboutUs.title" />
      </h1>
      <h2>
        <FormattedMessage
          id="home.aboutUs.weAre"
          values={{ 
              b: (chunks) => <b>{chunks}</b>,
              br: <br/> 
            }}
        />
      </h2>
    </div>
  );
};

export default AboutUs;
