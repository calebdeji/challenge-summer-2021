import { FC } from 'react';
import CardStyles, { CardProps } from './styles';

const Card: FC<CardProps> = ({ children, paddingType = 'large', ...props }) => {
	return (
		<CardStyles.Container {...props} paddingType={paddingType}>
			{children}
		</CardStyles.Container>
	);
};

export default Card;
