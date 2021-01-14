import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Button from 'components/Button';
import Card from 'components/Card';

const load = keyframes`
  from {
    transform : translateX(1)
  }
  to{
    background-color : var(--skeleton-loader-bg-animating);
    transform : translateX(0)
  }
`;

const Container = styled(Card)`
	background-color: var(--skeleton-loader-bg);
	display: flex;
	justify-content: space-between;
	position: relative;

	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		animation: ${load} 1000ms ease-in-out infinite alternate;
	}
`;
const LoadingButton = styled(Button)``;

const SkeletonLoaderStyles = { Container, LoadingButton };

export default SkeletonLoaderStyles;
