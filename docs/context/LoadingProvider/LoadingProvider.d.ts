import React, { FC } from 'react';
export declare const LoadingContext: React.Context<{
    isLoading: boolean;
    dispatchLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>;
declare const LoadingProvider: FC;
export declare const useLoading: () => {
    isLoading: boolean;
    dispatchLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export default LoadingProvider;
