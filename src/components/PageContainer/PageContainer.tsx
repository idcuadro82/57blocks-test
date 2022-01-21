import React, { FC, ReactElement } from 'react';

import './PageContainer.scss';

const PageContainer: FC<{ title?: string; renderItemHeader?: () => ReactElement }> = ({
  children,
  title,
  renderItemHeader = () => null,
  ...props
}) => {
  return (
    <div className="page-container">
      <div className="page">
        {title && (
          <div className="page-title-container">
            <h1 className="page-title">{title}</h1>
            {renderItemHeader()}
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
