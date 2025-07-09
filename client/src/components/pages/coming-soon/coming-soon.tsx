import PageHeader from "@components/pages/coming-soon/pageheader.tsx";
import { FormattedMessage } from "react-intl";

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
      ></PageHeader>
    </main>
  );
};

export default ComingSoon;
