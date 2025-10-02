import { Link } from "@tanstack/react-router";
import { FormattedMessage } from "react-intl";
import backToHomeStyles from "./back-to-home.module.css";

function BackToHome() {
  return (
    <Link
      to="/"
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
        bg-[var(--button-color-active-light)]
        hover:bg-[var(--button-color-hovered-light)]
        active:bg-[--button-color-pressed-light]
        !text-[var(--font-color-dark)]
        !hover:text-[var(--button-color-hovered-dark)]
        !active:text-[var(--button-color-pressed-dark)]
        font-bold
        transition-all
        duration-200
        ${backToHomeStyles.backToHome}
    `}
    >
      <FormattedMessage id="ui.backToHomeButton" />
    </Link>
  );
}

export default BackToHome;
