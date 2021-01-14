import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { convertPixelToRem } from 'utils/styles';

export interface ButtonStylesProps {
	variant?: 'text' | 'primary' | 'destructive';
	color?: string;
}

const ButtonWithVariantAsideText = css`
	max-width: ${convertPixelToRem(100)};
	width: ${convertPixelToRem(80)};
	max-height: ${convertPixelToRem(40)};
	height: ${convertPixelToRem(30)};
	border: solid 1px;
	border-radius: ${convertPixelToRem(2)};
`;

const Container = styled.button<ButtonStylesProps>`
	&:hover {
		cursor: pointer;
	}

	${(props) =>
		props.disabled &&
		css`
			&:hover {
				cursor: not-allowed;
			}
		`}

	${(props) => {
		switch (props.variant) {
			case 'primary':
				return css`
					${ButtonWithVariantAsideText};
					background-color: var(--primary-button-bg);
					border-color: var(--primary-button-border-color);
				`;

			case 'destructive':
				return css`
					${ButtonWithVariantAsideText};
					background-color: var(--destructive-button-bg);
					border-color: var(--destructive-button-border-color);
					color: #ffffff;
				`;
			case 'text':
				return css`
					color: ${props.color || 'var(--button-text-color)'};
				`;

			default:
				break;
		}
	}}
`;

const ButtonStyles = {
	Container,
};

export default ButtonStyles;
