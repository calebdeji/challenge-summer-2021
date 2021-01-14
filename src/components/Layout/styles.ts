import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { convertPixelToRem } from 'utils/styles';

interface ContainerProps {
	padTop?: boolean;
	padBottom?: boolean;
	spaceAround?: boolean;
}

const Container = styled.main<ContainerProps>`
	display: grid;
	row-gap: ${convertPixelToRem(20)};
	max-width: ${convertPixelToRem(800)};
	width: ${(props) => (props.spaceAround ? '90%' : '100%')};
	margin: auto;
	padding-top: ${(props) => (props.padTop ? convertPixelToRem(70) : '0')};
	padding-bottom: ${(props) => (props.padBottom ? convertPixelToRem(40) : '0')};
`;

interface ColumnProps {
	setToRowOnMobile?: boolean;
}

const Column = styled.div<ColumnProps>`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: ${convertPixelToRem(15)};

	${(props) =>
		props.setToRowOnMobile &&
		css`
			@media all and (max-width: 600px) {
				grid-template-columns: 1fr;
				row-gap: ${convertPixelToRem(20)};
			}
		`}

	&.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const LayoutStyles = {
	Container,
	Column,
};

export default LayoutStyles;
