import Layout from 'components/Layout';
import SkeletonLoader from 'components/SkeletonLoader/SkeletonLoader';
import { FC } from 'react';

interface Props {
	count?: number;
}

const SkeletonLoaderGroup: FC<Props> = ({ count = 5, ...props }) => {
	return (
		<Layout.Container>
			{Array(count)
				.fill(count)
				.map(() => {
					const key = btoa(String(Math.random() * 100000));
					return <SkeletonLoader key={key} />;
				})}
		</Layout.Container>
	);
};

export default SkeletonLoaderGroup;
