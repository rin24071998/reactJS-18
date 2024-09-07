import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { pageName } from '@constants/pages';

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();
  const authend = useSelector(
    (state: RootState) => state.user.userInfo.authend
  );
  if (!authend) {
    return <Navigate to={pageName.LOGIN} />;
  }
  if (!authend && location.pathname === pageName.ROOT) {
    return <Navigate to={pageName.LOGIN} />;
  }
  return <>{element}</>;
};

export default PrivateRoute;
