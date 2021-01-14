import { FC } from 'react';
import TextStyles, { TextProps } from './styles';

interface Props extends TextProps {}

const Text: FC<Props> = ({ children, ...props }) => {
  return <TextStyles {...props}>{children}</TextStyles>;
};

export default Text;
