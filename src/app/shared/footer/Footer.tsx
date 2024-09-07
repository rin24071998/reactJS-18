import { layoutConfig } from '@config/layout.config';
import { Layout } from 'antd';

const { Footer: FooterAnt } = Layout;

const Footer: React.FC = () => {
  return (
    <FooterAnt
      style={{ textAlign: 'center', height: layoutConfig.heightFooter }}
    >
      Hitachi Energy ©{new Date().getFullYear()}
    </FooterAnt>
  );
};

export default Footer;
