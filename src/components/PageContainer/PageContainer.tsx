import React, { FC } from 'react';

import './PageContainer.scss';

const PageContainer: FC<{ title?: string }> = ({ children, title, ...props }) => {
  return (
    <div className="page-container">
      <div className="page">
        {title && (
          <div className="page-title-container">
            <h1 className="page-title">{title}</h1>
          </div>
        )}
        <div className="page-content" {...props}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
