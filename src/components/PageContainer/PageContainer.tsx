import React, { FC } from 'react';

import './PageContainer.scss';

const PageContainer: FC = (props) => {
  return (
    <div className="page-container">
      <div className="page-content" {...props} />
    </div>
  );
};

export default PageContainer;
