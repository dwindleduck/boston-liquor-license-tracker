import { ExtraWork } from "@/data/extra-work-data";
import { useIntl } from "react-intl";
import styles from "./extra-work-card.module.css";

interface ExtraWorkCardProps {
  item: ExtraWork;
}

const ExtraWorkCard = ({ item }: ExtraWorkCardProps) => {
  const intl = useIntl();
  return (
    <a
      href={item.href}
      target="_blank"
      className={`
                ${item.name}
                flex
                items-end
                shrink-0
                w-full
                size-full
                md:size-[320px]
                min-h-[96px]

                py-[12px] px-[16px] md:py-[16px]
                
                rounded-[8px]
                
                bg-background-dark
                bg-cover
                bg-center
                bg-no-repeat
                
                cursor-pointer
                hover:opacity-90
                active:opacity-70
                
                focus-visible:border-border-gray
                focus-visible:ring-border-gray
                focus-visible:ring-[8px]
            `}
      style={{ backgroundImage: `url(${item.imgSrc})` }}
      title={intl.formatMessage({ id: item.alt })}
    >
      <p
        className={`
          text-[14px]
          md:text-[32px]
          text-shadow-lg
          font-medium
          ${item.colorTheme === "light" ? "text-font-dark" : "text-font-light"}`}
      >
        {item.title}
      </p>
    </a>
  );
};

export default ExtraWorkCard;
