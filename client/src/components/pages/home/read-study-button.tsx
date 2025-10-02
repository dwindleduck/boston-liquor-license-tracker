import { Link } from "@tanstack/react-router"
import { FormattedMessage } from "react-intl"

interface ReadStudyButtonProps {
  to: string
  messageId: string
}


const ReadStudyButton = ({ to, messageId }: ReadStudyButtonProps) => {
  return (
    < Link to={to} >
      <button
        className="
                inline-flex
                justify-center
                items-center
                bg-case-study
                hover:bg-[var(--case-study-button-hover-yellow)]
                active:bg-[var(--case-study-button-pressed-yellow)]
                text-[var(--font-color-dark)]
                hover:text-[var(--button-color-pressed-dark)]
                active:text-[--button-color-hovered-dark]
                font-bold
                px-8
                py-4
                rounded-lg shadow-md
                gap-2.5
                "
      >
        <FormattedMessage
          id={messageId}
        />
      </button>
    </Link >
  )
}

export default ReadStudyButton
