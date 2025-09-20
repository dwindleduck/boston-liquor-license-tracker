import { Button } from "@/components/ui/button";
import dataError from "../../assets/icons/data-error.svg";

const ContentContainer = ({ children }: React.PropsWithChildren) => {
  return <div className="flex-col h-full content-center">{children}</div>;
};

export const ZipDetailsContent = ({ zipData }: { zipData: unknown }) => {
  //   if (!zipData) {
  return (
    <ContentContainer>
      <img src={dataError} />
      <p>
        Whoops! There was an error loading the data, please reload or try again
        later
      </p>
      <Button>Refresh</Button>
    </ContentContainer>
  );
  //   }
  //   return <>{`${zipData}`}</>;
};
