const PageHeader = ({
  headerTitle,
  headerText,
  children,
}: {
  headerTitle: React.ReactNode;
  headerText: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <header className="pageheader">
      <div className="text-container">
        <h1 className="header-title">{headerTitle}</h1>
        <p className="header-text">{headerText}</p>
      </div>
      {children}
    </header>
  );
};

export default PageHeader;
