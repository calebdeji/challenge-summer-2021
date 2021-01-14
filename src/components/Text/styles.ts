import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { convertPixelToRem } from 'utils/styles';

export interface TextProps {
	color?: string;
	align?: 'center' | 'right' | 'left';
	weight?: number;
	lineHeight?: number;
	size?: number;
	as?: any;
}

const TextStyles = styled.span<TextProps>`
	${(props) =>
		props.color
			? css`
					color: ${props.color};
			  `
			: css`
					color: var(--black);
			  `}

	${(props) =>
		props.align &&
		css`
			text-align: ${props.align};
		`}

  ${(props) =>
		props.weight
			? css`
					font-weight: ${props.weight};
			  `
			: css`
					font-weight: 400;
			  `}

  ${(props) =>
		props.lineHeight &&
		css`
			line-height: ${props.lineHeight};
		`};

	${(props) =>
		props.size &&
		css`
			font-size: ${convertPixelToRem(props.size)};
		`}
`;

export default TextStyles;
