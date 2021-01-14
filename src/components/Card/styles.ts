import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { convertPixelToRem } from 'utils/styles';

export interface CardProps {
	boxShadowType?: 'mini' | 'normal';
	isSectioned?: boolean;
	paddingType?: 'large' | 'medium' | 'small';
	fadeIn?: boolean;
}

const fadeIn = keyframes`
	from {
		opacity : 0;
	}

	to {
		opacity : 1
	}
`;

const Container = styled.div<CardProps>`
	background-color: transparent;

	box-shadow: ${(props) =>
		props.boxShadowType === 'mini' ? 'var(--box-shadow-light)' : 'var(--box-shadow)'};
	list-style-type: none;
	height: max-content;
	transition: height 500ms ease-in-out;
	${(props) =>
		props.isSectioned &&
		css`
			display: grid;
			justify-content: space-between;
			grid-auto-flow: column;
			align-items: center;
			column-gap: ${convertPixelToRem(7)};
		`}
	${(props) => {
		switch (props.paddingType) {
			case 'large':
				return css`
					padding: ${convertPixelToRem(15)};
				`;
			case 'medium':
				return css`
					padding: ${convertPixelToRem(10)};
				`;

			case 'small':
				return css`
					padding: ${convertPixelToRem(7)};
				`;
			default:
				break;
		}
	}}

	${(props) =>
		props.fadeIn &&
		css`
			animation: ${fadeIn} 600ms ease-in;
		`}
`;

const CardStyles = {
	Container,
};

export default CardStyles;
