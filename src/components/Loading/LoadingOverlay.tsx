import React, { FC } from 'react';
import { DEFAULT_ASSETS } from 'src/constants';

import './LoadingOverlay.scss';

const LoadingOverlay: FC = () => {
  return (
    <div className="app-loading">
      <img className="app-loader" src={DEFAULT_ASSETS.defaultImagePath}></img>
    </div>
  );
};

export default LoadingOverlay;
