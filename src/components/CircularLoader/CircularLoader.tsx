import { FC } from 'react';

import { LoaderLine, Props } from './styles';

const CircularLoader: FC<Props> = ({ ...props }) => {
	return <LoaderLine {...props} />;
};

export type { Props as LoaderProps } from './styles';

export default CircularLoader;
