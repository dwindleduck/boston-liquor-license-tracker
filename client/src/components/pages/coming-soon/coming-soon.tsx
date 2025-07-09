import PageHeader from "@components/pages/coming-soon/pageheader.tsx";
import BackToHome from "@components/ui/back-to-home/back-to-home.tsx";
import { FormattedMessage } from "react-intl";
import "./coming-soon.css"; 

const ComingSoon = () => {
  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //     <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
    //     <p className="text-lg text-gray-600">We're working hard to bring you this feature. Stay tuned!</p>
    // </div>
    <main className="coming-soon-page">
      <PageHeader
        headerTitle={<FormattedMessage id="comingSoon.title" />}
        headerText={<FormattedMessage id="comingSoon.description" />}
      >
        <BackToHome />
      </PageHeader>
      <div className="comingSoon flex flex-col md:items-start md:justify-start w-full w-full pl-3 pr-3  pb-[70px]  md:pt-[200px] md:pb-[144px] md:pl-[64px] gap-[24px]"></div>
    </main>
  );
};

export default ComingSoon;
