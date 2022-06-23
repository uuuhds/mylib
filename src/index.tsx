import React, { FC, HTMLAttributes, ReactNode } from 'react';
import './index.less';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './components/button';
export * from './components/todos';
export * from './components/menu';
