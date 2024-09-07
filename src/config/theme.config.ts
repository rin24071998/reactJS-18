export const themeMode = {
  LIGHT: 'light',
  DARK: 'dark',
};
export const themeColor = {
  EB0023: '#EB0023',
};
export const configTheme = {
  [themeMode.LIGHT]: {
    token: {
      colorPrimary: '#1890ff',
      colorBgLayout: '#ffffff',
      colorBgContainer: '#ffffff',
      colorBgContent: 'rgba(0, 0, 0, 0.02)',
      fontSize: 16,
      colorIconheader: 'rgba(0, 0, 0, 0.25)',
      textcolorIconheader: '#000000',
    },
  },
  [themeMode.DARK]: {
    token: {
      colorPrimary: '#1890ff',
      colorBgLayout: '#000000',
      colorText: '#ffffff',
      colorBgContainer: '#000000',
      fontSize: 16,
      colorBgContent: '#000000',
      colorIconheader: '#ffffff',
      textcolorIconheader: '#000000',
    },
  },
};
