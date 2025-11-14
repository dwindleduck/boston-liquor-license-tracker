import { useIntl, FormattedMessage } from 'react-intl';
import myImage from '/src/assets/images/case-study-placeholder.png';
import caseStudyStyles from "./case-study.module.css";
import ReadStudyButton from "./read-study-button";

const CaseStudy = () => {
  const intl = useIntl();
  return (
    <div className={caseStudyStyles.caseStudy}>
        <div className={`${caseStudyStyles.studyIntro} !p-0 max-w-[840px] w-auto flex-shrink`}>
          <h2 className ="max-w-[840px] w-auto flex-shrink">
            <FormattedMessage
              id="home.caseStudy.title"
            />
          </h2>
          <h2>
            <FormattedMessage
              id="home.caseStudy.part1"
            />
            </h2>
          <h2>
            <FormattedMessage
              id="home.caseStudy.part2"
            />
            </h2>
          <h2>
          <FormattedMessage
              id="home.caseStudy.part3"
          />
          </h2>
        </div>

        <div className={`${caseStudyStyles.dottedThickBorder} flex justify-center h-auto overflow-hidden mx-auto max-w-[480px] box-border`}
          >
          <img
            src={myImage}
            alt={intl.formatMessage({ id: "home.caseStudy.image.alt" })}
            className="
              w-full
              max-w-[480px]
              h-auto
              object-cover
              transition-transform duration-300 hover:scale-105
              block
              m-auto
            "
          />
        </div>

        <div className="
          w-full
          flex
          justify-center
          "
          >
          <ReadStudyButton to={"/coming-soon"} messageId={"home.caseStudy.button.read"}/>
        </div>
      </div>
  );
};

export default CaseStudy;
