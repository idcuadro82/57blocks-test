import { FC, ReactElement } from 'react';
import './PageContainer.scss';
declare const PageContainer: FC<{
    title?: string;
    renderItemHeader?: () => ReactElement;
}>;
export default PageContainer;
