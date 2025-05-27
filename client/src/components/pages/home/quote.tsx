import './quote.css';
import { FormattedMessage } from "react-intl";

const Quote = () => {
  return (
    <div className="quote">
      <h1>
        <FormattedMessage
          id="home.quote"
          defaultMessage="...working to create a more equitable restaurant ecosystem for all..."
        />
      </h1>
    </div>
  )
}

export default Quote
