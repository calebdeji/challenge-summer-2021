import styled from '@emotion/styled';
import { convertPixelToRem } from 'utils/styles';

const ImageContainer = styled.div`
	width: ${convertPixelToRem(150)};
	height: ${convertPixelToRem(100)};
	margin: auto;

	.animation {
		stroke: var(--black);
		fill: var(--black);

		* {
			stroke: var(--black);
			fill: var(--black);
		}
	}
`;

const EmptyStateStyles = {
	ImageContainer,
};

export default EmptyStateStyles;
