import { Spin } from 'antd';
import { FC } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
const Loading: FC = () => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress ? <Spin fullscreen={true} size='large' /> : null;
};
export default Loading;
