import { ChangeEvent, FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import Text from 'components/Text';
import SearchStyles from './styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import useComponentDidUpdate from 'hooks/useComponentDidUpdate';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	onInputComplete: (_: string) => void;
}

const Search: FC<SearchProps> = ({ label, children, onInputComplete, ...props }) => {
	const [searchText, setSearchText] = useState<string>('');
	const [isUserTyping, setisUserTyping] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const timeOut = useRef<any>(setTimeout(() => {}, 0));

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearchText(value);
	};

	useComponentDidUpdate(() => {
		if (!isUserTyping && searchText.trim()) onInputComplete(searchText.trim());
	}, [isUserTyping]);

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			clearTimeout(timeOut.current);
			if (event.key === 'Enter') return setisUserTyping(false);

			setisUserTyping(true);

			timeOut.current = setTimeout(() => {
				searchText.trim() && setisUserTyping(false);
			}, 1000);
		};

		const inputRefNode = inputRef.current;

		inputRefNode?.addEventListener('keydown', handleKeyPress);

		return () => {
			inputRefNode?.removeEventListener('keydown', handleKeyPress);
		};
	}, [onInputComplete, searchText]);

	return (
		<SearchStyles.Container>
			<Text> {label} </Text>

			<SearchStyles.Box>
				<div className='icon-container'>
					<SearchIcon className='icon' />
				</div>
				<input
					type='search'
					placeholder={props.placeholder || 'Search ...'}
					{...props}
					className='input'
					onChange={handleChange}
					ref={inputRef}
					inputMode='search'
				/>
			</SearchStyles.Box>
		</SearchStyles.Container>
	);
};

export default Search;
