import { FC } from 'react';
import { Menu as MenuAnt } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

interface MenuProps {
  theme?: 'light' | 'dark';
  mode?: 'vertical' | 'horizontal' | 'inline';
  selectedKeys?: string[];
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
  items: ItemType[];
  handleOnClick?: MenuClickEventHandler;
  className?: string;
  styles?: React.CSSProperties;
  menuProps?: any;
}
const Menu: FC<MenuProps> = (props) => {
  const {
    theme,
    mode,
    selectedKeys,
    defaultOpenKeys,
    items,
    handleOnClick,
    className,
    styles,
    menuProps,
  } = props;
  return (
    <MenuAnt
      theme={theme}
      mode={mode}
      selectedKeys={selectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      items={items}
      onClick={handleOnClick}
      className={className}
      style={styles}
      {...menuProps}
    />
  );
};
export default Menu;
