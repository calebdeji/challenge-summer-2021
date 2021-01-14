import { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';

import CircularLoader from 'components/CircularLoader';
import ButtonStyles, { ButtonStylesProps } from './styles';

interface Props
	extends HTMLAttributes<HTMLButtonElement>,
		ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonStylesProps {
	isLoading?: boolean;
}

const Button: FC<Props> = ({ children, isLoading, variant = 'primary', ...props }) => {
	return (
		<ButtonStyles.Container {...{ ...props, variant }} disabled={isLoading || props.disabled}>
			{isLoading ? <CircularLoader size={13} /> : children}
		</ButtonStyles.Container>
	);
};

export default Button;
