import styles from './quote.module.css';
import { FormattedMessage } from "react-intl";

const Quote = () => {
  return (
    <div className={`${styles.quote}`}>
      <h1>
        <FormattedMessage id="home.quote" />
      </h1>
    </div>
  )
}

export default Quote
