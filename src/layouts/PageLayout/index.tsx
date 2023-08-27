import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="font-Geomanist font-normal text-[#1D1E21]">{children}</div>;
};

export default PageLayout;
