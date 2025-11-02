import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-10">
      <h1>Main Layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
