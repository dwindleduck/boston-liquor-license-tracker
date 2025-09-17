import { useNavigate } from "@tanstack/react-router";
import { FormattedMessage } from "react-intl";
import backToHomeStyles from "./back-to-home.module.css";

function BackToHome() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        console.log("Back to Home button clicked");
        alert("Navigating back to home!");
        navigate({ to: "/" });
      }}
      className={`
              flex
              justify-center
              items-center
              gap-[10px]
              w-[311px]
              px-[24px] py-[8px] 
              border-[1px]
              border-black
              rounded-[8px]
              bg-[#FDFDFD]
              hover:bg-[#EAEAEA]
              active:bg-[#CDCDCD]
              text-[#2E2E2E]
              hover:text-[#383838]
              active:text-[#404040]
              font-bold
              transition-all
              duration-200
              ${backToHomeStyles.backToHome}
            `}
    >
      <FormattedMessage id="ui.backToHomeButton" />
    </button>
  );
}

export default BackToHome;
