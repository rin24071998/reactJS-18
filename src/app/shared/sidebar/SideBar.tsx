import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pageName } from '@constants/pages';
import Logo from '@icons/Logo';
import {
  getDefaultOpenKeys,
  getInfoUrlByCurrentPath,
} from '@helpers/functions';
import { FundOutlined, SettingOutlined, UserOutlined } from '@icons/icons';
import { MenuTheme } from '@interfaces/theme';
import { useTranslation } from 'react-i18next';
import { layoutConfig } from '@config/layout.config';
import { themeColor } from '@config/theme.config';
import Paragraph from '@components/Paragraph/Paragraph';
import Menu from '@components/Menu/Menu';
interface SideBarProps {
  collapsed: boolean;
  mode?: MenuTheme;
}
const SideBar: FC<SideBarProps> = (props) => {
  const { collapsed, mode } = props;
  const { t } = useTranslation();
  const items = [
    {
      key: pageName.DASHBOARD,
      icon: React.createElement(FundOutlined),
      label: t('page.dashboard'),
    },
    {
      key: pageName.ADMIN,
      label: t('page.admin'),
      icon: React.createElement(SettingOutlined),
      children: [
        {
          key: pageName.USER1,
          label: t('page.user1'),
          icon: React.createElement(UserOutlined),
        },
        {
          key: pageName.USER1,
          label: t('page.user2'),
          icon: React.createElement(UserOutlined),
        },
      ],
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const routeInfo = getInfoUrlByCurrentPath(location.pathname);
  const handleNavigate = (info: any) => {
    navigate(info.key);
  };
  return (
    <>
      <div
        className='app-sidebar'
        style={{
          height: layoutConfig.heightHeader,
        }}
      >
        <Logo />
        {!collapsed && (
          <div className='text-logo'>
            <Paragraph
              className='text-xxxl txt-bold'
              styles={{
                color: themeColor.EB0023,
              }}
              text={'text1'}
            />
            <Paragraph className='text-lg txt-bold' text={'text2'} />
          </div>
        )}
      </div>
      <Menu
        className='text-normal'
        theme={mode}
        mode='inline'
        selectedKeys={[routeInfo?.pathName || '']}
        defaultOpenKeys={[getDefaultOpenKeys(location.pathname)]}
        items={items}
        handleOnClick={(info) => handleNavigate(info)}
      />
    </>
  );
};

export default SideBar;
