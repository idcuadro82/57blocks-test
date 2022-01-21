import React, { FC } from 'react';

import './LoadingOverlay.scss';

const LoadingOverlay: FC = () => {
  return (
    <div className="app-loading">
      <img className="app-loader" src="default_image.png"></img>
    </div>
  );
};

export default LoadingOverlay;
