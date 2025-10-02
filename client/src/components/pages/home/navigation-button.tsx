import { Link } from "@tanstack/react-router"
import { FormattedMessage } from "react-intl"

interface NavigationButtonProps {
  to: string
  messageId: string
}

const NavigationButton = ({ to, messageId }: NavigationButtonProps) => {
  return (
    <Link to={to}>
      <button className="
                flex
                justify-center
                items-center
                text-center
                w-[400px] h-[62px]
                px-[24px] py-[12px]
                rounded-[8px]
                bg-[var(--button-color-active-dark)] hover:bg-[var(--button-color-hovered-dark)] active:bg-[var(--button-color-pressed-dark)]
                text-[var(--button-color-active-light)] hover:text-[var(--button-color-hovered-light)] active:text-[var(--button-color-pressed-light)]
                text-[32px] font-normal
                cursor-pointer
            "
      >
        <FormattedMessage id={messageId} />
      </button>
    </Link>
  )
}

export default NavigationButton
