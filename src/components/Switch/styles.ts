import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { convertPixelToRem } from 'utils/styles';

const slideRight = keyframes`
  from{
    transform : translateX(0)
  }
  to {
    transform : translateX(15px);
  }
`;

const slideLeft = keyframes`
  from {
    transform : translateX(15px);
  }
  to{
    transform : translateX(0)
  }
`;

const Container = styled.button`
	width: ${convertPixelToRem(40)};
	height: ${convertPixelToRem(20)};
	border-radius: ${convertPixelToRem(7)};
	position: relative;
	border: none;
	box-shadow: var(--box-shadow-light);
	background-color: var(--white);
`;

export interface SwitchProps {
	isOn?: boolean;
}

const Switch = styled.span<SwitchProps>`
	display: block;
	position: relative;
	height: ${convertPixelToRem(10)};
	width: ${convertPixelToRem(10)};
	border-radius: 100%;
	background-color: var(--black);

	${(props) =>
		props.isOn
			? css`
					animation: ${slideRight} 500ms ease-in-out forwards;
			  `
			: css`
					animation: ${slideLeft} 500ms ease-in-out forwards;
			  `}
`;

const SwitchStyles = {
	Container,
	Switch,
};

export default SwitchStyles;
