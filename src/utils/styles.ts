export const convertPixelToRem = (pixelValue: number) => {
	const basePixel = 16;
	return `${pixelValue / basePixel}rem`;
};
