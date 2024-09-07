import { FC } from 'react';
import { Typography } from 'antd';
import { CopyConfig } from 'antd/es/typography/Base';
const { Paragraph: ParagraphAnt } = Typography;

interface ParagraphProps {
  text: string | React.JSX.Element;
  copyable?: boolean | CopyConfig;
  styles?: React.CSSProperties;
  className?: string;
  paragraphProps?: any;
}
const Paragraph: FC<ParagraphProps> = (props) => {
  const { text, copyable, styles, className, paragraphProps } = props;
  return (
    <ParagraphAnt
      style={{ ...styles }}
      copyable={copyable}
      className={className}
      {...paragraphProps}
    >
      {text}
    </ParagraphAnt>
  );
};
export default Paragraph;
