import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { convertPixelToRem } from 'utils/styles';

export interface Props {
	size?: number;
	color?: string;
	holdAnimation?: boolean;
}

const spin = keyframes`
    from{
        transform : rotate(0deg)
    }
    to{
        transform : rotate(360deg)
    }
`;

const LoaderLine = styled.div<Props>`
	border: solid 2px;
	${(props) =>
		props.color
			? css`
					border-color: ${props.color};
			  `
			: css`
					border-color: var(--circular-loader-color);
			  `};
	border-left-color: transparent;
	border-bottom-color: transparent;
	animation: ${spin} 500ms infinite linear;
	width: ${(props) => convertPixelToRem(props?.size || 16)};
	height: ${(props) => convertPixelToRem(props?.size || 16)};
	border-radius: 100%;
	margin: auto;
	${(props) =>
		props.holdAnimation &&
		css`
			animation-play-state: paused;
		`}
`;

export { LoaderLine };
