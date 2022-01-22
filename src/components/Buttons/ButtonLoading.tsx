import React, { FC } from 'react';

const ButtonLoading: FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { text: string; isLoading: boolean }> = ({
  isLoading,
  text,
  ...buttonProps
}) => {
  return (
    <button className="button-primary" disabled={isLoading} type="button" {...buttonProps}>
      {text}
    </button>
  );
};

export default ButtonLoading;
