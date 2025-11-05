import styles from  "./license-type.module.css";
import { FormattedMessage } from "react-intl";

const LicenseType = () => {
  return (
    <section className={styles.licenseType}>
      <h2 className="font-bold m-0">
        <FormattedMessage id="database.licenseTerminology.header" />
      </h2>
      <p className="mt-[8px] mb-[16px] font-normal">
        <FormattedMessage id="database.licenseTerminology.description" />
      </p>
      <h4 className="font-medium">
        <FormattedMessage id="database.licenseTerminology.allAlcohol.title" />
      </h4>
      <p className="mt-[8px] mb-[16px] font-normal">
        <FormattedMessage id="database.licenseTerminology.allAlcohol.description" />
      </p>
      <h4 className="font-medium">
        <FormattedMessage id="database.licenseTerminology.wineAndBeer.title" />
      </h4>
      <p className="mt-[8px] mb-[16px] font-normal">
        <FormattedMessage id="database.licenseTerminology.wineAndBeer.description" />
      </p>
      <h4 className="font-medium">
        <FormattedMessage id="database.licenseTerminology.transferable.title" />
      </h4>
      <p className="mt-[8px] mb-[16px] font-normal">
        <FormattedMessage id="database.licenseTerminology.transferable.description" />
      </p>
      <h4 className="font-medium">
        <FormattedMessage id="database.licenseTerminology.nonTransferable.title" />
      </h4>
      <p className="mt-[8px] mb-[16px] font-normal">
        <FormattedMessage id="database.licenseTerminology.nonTransferable.description" />
      </p>
    </section>
  );
};

export default LicenseType;
