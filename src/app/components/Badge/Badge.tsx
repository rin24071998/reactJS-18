import { FC } from 'react';
import { Badge as BadgeAnt } from 'antd';

interface BadgeProps {
  count: string | number;
  overflowCount?: number;
  styles?: React.CSSProperties;
  children?: any;
  offset?: [number | string, number | string];
  className?: string;
  badgeprops?: any;
}
const Badge: FC<BadgeProps> = (props) => {
  const {
    count,
    overflowCount,
    styles,
    offset,
    className,
    badgeprops,
    children,
  } = props;
  return (
    <BadgeAnt
      count={count}
      overflowCount={overflowCount}
      style={styles}
      offset={offset}
      className={className}
      {...badgeprops}
    >
      {children}
    </BadgeAnt>
  );
};
export default Badge;
