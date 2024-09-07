const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@icons': path.resolve(__dirname, 'src/app/components/icons'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@layouts': path.resolve(__dirname, 'src/app/layouts'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@locales': path.resolve(__dirname, 'src/i18n/locales'),
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      '@routes': path.resolve(__dirname, 'src/app/routes'),
      '@shared': path.resolve(__dirname, 'src/app/shared'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@hooks': path.resolve(__dirname, 'src/app/hooks'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@stylesheet': path.resolve(__dirname, 'src/stylesheet'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
