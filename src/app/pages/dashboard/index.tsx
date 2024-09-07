import { useAppDispatch } from '@redux/hooks';
import { fetchUsers } from '@redux/user/user.dispatcher';
import { useEffect } from 'react';

export default function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <>dashboard1234</>;
}
