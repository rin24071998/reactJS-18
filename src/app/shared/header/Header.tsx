import React from 'react';
import { Avatar, Layout, theme } from 'antd';
import { layoutConfig } from '@config/layout.config';
import { useTranslation } from 'react-i18next';
import Paragraph from '@components/Paragraph/Paragraph';
import { getInfoUrlByCurrentPath } from '@helpers/functions';
import { useLocation } from 'react-router-dom';
import { BellOutlined, GlobalOutlined } from '@icons/icons';
import { getItemsLanguage, getItemsMenuUser } from '@config/config';
import Badge from '@components/Badge/Badge';
import Dropdown from '@components/Dropdown/Dropdown';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { widthMobileResponsive } from '@constants/constants';
const { Header: HeaderAnt } = Layout;
interface AppHeaderProps {
  collapsed: boolean;
}

const Header: React.FC<AppHeaderProps> = (props) => {
  const { collapsed } = props;
  const location = useLocation();
  const routeInfo = getInfoUrlByCurrentPath(location.pathname);
  const { i18n, t } = useTranslation();
  const {
    token: { colorBgContainer, colorIconheader, textcolorIconheader },
  } = theme.useToken();
  const { width } = useWindowDimensions();
  const handleChangeLanguage = (e: any) => {
    const selectedLanguage = e.key;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };
  return (
    <HeaderAnt
      className='app-header'
      style={{
        background: colorBgContainer,
        width: `calc(100% - ${
          collapsed
            ? layoutConfig.sliderCollapsedWidth
            : layoutConfig.sliderWidth
        }px)`,
        height: layoutConfig.heightHeader,
      }}
    >
      <Paragraph
        className='heading1 txt-bold'
        text={t(routeInfo?.title || '')}
      />
      <div className='header-info'>
        {width > widthMobileResponsive && (
          <Paragraph className='text-xxl txt-bold' text={'abcd,'} />
        )}
        <Dropdown
          menu={{ items: getItemsLanguage(t), onClick: handleChangeLanguage }}
          trigger={['click']}
          className='header-global'
        >
          <>
            <Badge
              className='global-icon'
              count={i18n.language}
              offset={[0, 30]}
              styles={{
                background: colorIconheader,
                color: textcolorIconheader,
              }}
            >
              <GlobalOutlined
                style={{
                  color: colorIconheader,
                }}
              />
            </Badge>
          </>
        </Dropdown>
        <Badge count={20} overflowCount={1000} className='notification'>
          <BellOutlined
            style={{
              color: colorIconheader,
            }}
          />
        </Badge>
        <Dropdown
          menu={{
            items: getItemsMenuUser('abcd,', t, width < widthMobileResponsive),
          }}
          className='header-user-info'
          trigger={['click']}
        >
          <Avatar size={40} />
        </Dropdown>
      </div>
    </HeaderAnt>
  );
};

export default Header;
