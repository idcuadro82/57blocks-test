import React, { createContext, FC, useContext, useState } from 'react';
import { LoadingOverlay } from 'src/components';

export const LoadingContext = createContext<{
  isLoading: boolean;
  dispatchLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isLoading: false,
  dispatchLoading: (value) => {},
});

const LoadingProvider: FC = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        dispatchLoading: setIsLoading,
      }}
    >
      {isLoading && <LoadingOverlay />}
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useAuth must be inside AuthProvider');
  }
  return context;
};

export default LoadingProvider;
