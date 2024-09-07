import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { pageName } from '@constants/pages';

interface PrivateRouteProps {
  element?: JSX.Element;
}

const PublicRoutes: React.FC<PrivateRouteProps> = ({ element }) => {
  const authend = useSelector(
    (state: RootState) => state.user.userInfo.authend
  );
  const location = useLocation();
  if (authend) {
    return <Navigate to={pageName.DASHBOARD} />;
  }
  if (authend && location.pathname === pageName.ROOT) {
    return <Navigate to={pageName.DASHBOARD} />;
  }
  return <>{element}</>;
};

export default PublicRoutes;
