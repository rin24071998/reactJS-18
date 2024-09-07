import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import '@stylesheet/styles.scss';
import { configTheme } from '@config/theme.config';
import { MenuTheme } from '@interfaces/theme';
import Loading from '@shared/loading/Loading';
import AppRoutes from '@routes/Routes';
const App: React.FC = () => {
  const [mode] = useState<MenuTheme>('light');
  return (
    <ConfigProvider theme={configTheme[mode]}>
      <BrowserRouter>
        <AppRoutes mode={mode} />
        <Loading />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
