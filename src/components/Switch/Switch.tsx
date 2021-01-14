import { FC } from 'react';
import SwitchStyles, { SwitchProps } from './styles';

interface Props extends SwitchProps {
	className?: string;
	onClick?: () => void;
	label?: string;
}

const Switch: FC<Props> = ({ className, onClick, label, ...props }) => {
	return (
		<SwitchStyles.Container
			{...{ className, onClick }}
			title={label || 'switch'}
			arial-label={label || 'switch'}
		>
			<SwitchStyles.Switch {...props} />
		</SwitchStyles.Container>
	);
};

export default Switch;
