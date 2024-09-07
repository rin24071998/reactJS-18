import React, { FC } from 'react';
import { MenuProps, Dropdown as DropdownAnt } from 'antd';

interface DropdownProps {
  menu: MenuProps;
  children?: React.ReactNode;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  className?: string;
  dropdownProps?: any;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { menu, trigger, className, dropdownProps, children } = props;
  return (
    <div>
      <DropdownAnt
        menu={menu}
        trigger={trigger}
        className={className}
        {...dropdownProps}
      >
        <div>{children}</div>
      </DropdownAnt>
    </div>
  );
};

export default Dropdown;
