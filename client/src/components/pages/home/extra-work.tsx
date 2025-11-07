import { FormattedMessage } from "react-intl";
import { extraWorkData } from "@/data/extra-work-data";
import ExtraWorkCard from "./extra-work-card";

const ExtraWork = () => {
  return (
    <div className="extra-work p-[24px] md:p-[32px]">
      <h2 className="text-2xl md:text-[32px] font-bold text-center lg:text-start">
        <FormattedMessage id="home.extraWork.title" />
      </h2>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:justify-start w-full pt-[8px] md:pt-[16px] gap-[16px] md:gap-[64px]">
        {extraWorkData.map((item, index) => (
          <ExtraWorkCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ExtraWork;
