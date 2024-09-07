import { Outlet } from 'react-router-dom';
import { FC, useState } from 'react';
import { Layout, MenuTheme, theme } from 'antd';
import { layoutConfig } from '@config/layout.config';
import { siderStyle } from './AdminLayout.config';
import SideBar from '@shared/sidebar/SideBar';
import Header from '@shared/header/Header';
import Footer from '@shared/footer/Footer';

const { Content, Sider } = Layout;

interface AdminLayoutProps {
  mode?: MenuTheme;
}
const AdminLayout: FC<AdminLayoutProps> = (props) => {
  const { mode } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContent, colorBorder },
  } = theme.useToken();
  return (
    <>
      <Layout hasSider>
        <Sider
          style={{
            ...siderStyle,
            borderRight: `solid 1px ${colorBorder}`,
          }}
          theme={mode}
          breakpoint='lg'
          onCollapse={(collapsed, _) => {
            setCollapsed(collapsed);
          }}
          width={layoutConfig.sliderWidth}
          collapsedWidth={layoutConfig.sliderCollapsedWidth}
        >
          <SideBar mode={mode} collapsed={collapsed} />
        </Sider>
        <Layout
          style={{
            marginInlineStart: collapsed
              ? layoutConfig.sliderCollapsedWidth
              : layoutConfig.sliderWidth,
          }}
        >
          <Header collapsed={collapsed} />
          <Content
            style={{
              marginTop: layoutConfig.heightHeader,
              overflow: 'initial',
              background: colorBgContent,
              padding: '0 20px',
              minHeight: `calc( 100vh - ${
                layoutConfig.heightHeader + layoutConfig.heightFooter
              }px)`,
            }}
          >
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};
export default AdminLayout;
