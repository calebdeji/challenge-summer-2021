import styled from '@emotion/styled';
import { convertPixelToRem } from 'utils/styles';

const SearchContainer = styled.div`
	display: grid;
	row-gap: ${convertPixelToRem(10)};
`;

const SearchBox = styled.div`
	width: 100%;
	height: ${convertPixelToRem(30)};
	display: flex;
	align-items: center;
	border: solid 1px var(--light-black);
	background-color: transparent;

	.input {
		border: none;
		height: 100%;
		width: -webkit-fill-available;
		outline: none;
		background-color: transparent;
		color: var(--black);
	}

	.icon-container {
		width: ${convertPixelToRem(30)};
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		.icon {
			height: ${convertPixelToRem(10)};
			width: ${convertPixelToRem(10)};
			fill: var(--black);
		}
	}
`;

const SearchStyles = {
	Container: SearchContainer,
	Box: SearchBox,
};

export default SearchStyles;
