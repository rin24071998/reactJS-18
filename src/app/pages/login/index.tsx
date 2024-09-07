import { pageName } from '@constants/pages';
import { useAppDispatch } from '@redux/hooks';
import { setUserInfo } from '@redux/user/userSlice';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnClickLogin = () => {
    const userInfo = {
      accessToken:
        'Ry6ZVC7d1QaLsMjxzJyQdY00bT15FCM5cH71ZabVR6JJYz2LwBGhAxAuDMZVHlci',
      roles: ['admin'],
      authend: true,
    };
    dispatch(setUserInfo(userInfo));
    navigate(pageName.DASHBOARD);
  };
  return <Button onClick={() => handleOnClickLogin()}>Login</Button>;
}
