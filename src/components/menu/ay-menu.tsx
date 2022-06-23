import React from 'react';
import { Menu, MenuProps } from 'antd';
import './ay-menu.less';

export type AyMenuProps = MenuProps;

export const HorizontalMenu = ({ children, ...rest }: AyMenuProps) => {
  return (
    <Menu mode="horizontal" {...rest}>
      {children}
    </Menu>
  );
};
