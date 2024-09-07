import { pageName } from '@constants/pages';
import { useRoutes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import AdminLayout from '@shared/admin/AdminLayout';
import { MenuTheme } from 'antd';
import { ComponentType, lazy, Suspense } from 'react';
interface AppRoutesProps {
  mode?: MenuTheme;
}
// Lazy load components
const lazyLoad = (Component: ComponentType) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);
const AppRoutes: React.FC<AppRoutesProps> = (props) => {
  const { mode } = props;
  const Login = lazy(() => import('@pages/login'));
  const Dashboard = lazy(() => import('@pages/dashboard'));
  const NotFound = lazy(() => import('@pages/notFound'));
  const routes = useRoutes([
    {
      path: pageName.LOGIN,
      element: lazyLoad(() => <PublicRoutes element={<Login />} />),
    },
    {
      element: lazyLoad(() => (
        <PrivateRoute element={<AdminLayout mode={mode} />} />
      )),
      children: [{ path: pageName.DASHBOARD, element: lazyLoad(Dashboard) }],
    },
    { path: pageName.NOTFOUND, element: lazyLoad(NotFound) },
    { path: pageName.ROOT, element: <Navigate to={pageName.DASHBOARD} /> },
  ]);

  return <>{routes}</>;
};

export default AppRoutes;
