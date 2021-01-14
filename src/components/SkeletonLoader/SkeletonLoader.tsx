import Text from 'components/Text';
import SkeletonLoaderStyles from './styles';

const SkeletonLoader = () => {
	return (
		<SkeletonLoaderStyles.Container fadeIn>
			<Text> {''} </Text>
			<SkeletonLoaderStyles.LoadingButton variant='primary' as='div' />
		</SkeletonLoaderStyles.Container>
	);
};

export default SkeletonLoader;
