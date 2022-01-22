import clsx from 'clsx';
import React, { FC, ImgHTMLAttributes, useRef, useState } from 'react';
import { DEFAULT_ASSETS } from 'src/constants';

import './ImageLoading.scss';

const ImageLoading: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const spinnerContainerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageLoaded = () => {
    setImgLoaded(true);
  };

  return (
    <>
      {!imgLoaded && (
        <div
          className={props.className}
          id="image-loading-spinner-container"
          ref={spinnerContainerRef}
          style={{ height: spinnerContainerRef.current?.clientWidth }}
        >
          <i className="fas fa-spinner image-loading-spinner"></i>
        </div>
      )}
      <img
        {...props}
        className={clsx([props.className, { 'image-loading-hidden': !imgLoaded }])}
        ref={imgRef}
        onError={() => {
          if (imgRef.current) imgRef.current.src = DEFAULT_ASSETS.defaultImagePath;
        }}
        onLoad={handleImageLoaded}
      ></img>
    </>
  );
};

export default ImageLoading;
