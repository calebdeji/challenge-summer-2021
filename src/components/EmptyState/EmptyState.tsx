import { FC } from 'react';
import { Lottie } from '@crello/react-lottie';

import Text from 'components/Text';
import Layout from 'components/Layout';
import EmptyStateStyles from './styles';
import animationData from 'data/empty-icon-animation.json';

interface Props {
	text?: string;
}

const EmptyState: FC<Props> = (props) => {
	return (
		<Layout.Container padTop padBottom>
			<EmptyStateStyles.ImageContainer>
				<Lottie
					config={{ animationData, loop: true }}
					height='100px'
					width='100px'
					speed={2}
					className='animation'
				/>
			</EmptyStateStyles.ImageContainer>
			{props.text && <Text align='center'> {props.text} </Text>}
		</Layout.Container>
	);
};

export default EmptyState;
