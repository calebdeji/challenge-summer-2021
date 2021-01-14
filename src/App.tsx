import { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from 'components/Layout';
import Text from 'components/Text';
import Card from 'components/Card/Card';
import Search from 'components/Search';
import SkeletonLoaderGroup from 'components/SkeletonLoaderGroup';
import EmptyState from 'components/EmptyState';
import MovieBox from 'components/MovieBox';
import NominatedBox from 'components/NominatedBox';
import AppContext, { useAppContext } from 'context/AppContext';
import Button from 'components/Button';
import Switch from 'components/Switch';
import './App.css';
import storage from 'libs/storage/storage';

function App() {
	const [searchValue, setSearchValue] = useState<String>('');
	const [switchState, setswitchState] = useState<boolean>(storage.get('switch')?.state || false);
	const contextValues = useAppContext();
	const bodyElement = useRef<HTMLBodyElement>(document.querySelector('body'));

	const handleSearch = (value: string) => {
		setSearchValue(value);
		contextValues.fetchMovies({ s: value });
	};

	const handleSwitchToggle = () => {
		setswitchState((prev) => !prev);
	};

	useEffect(() => {
		storage.save('switch', { state: switchState });

		if (switchState) {
			return bodyElement.current?.classList.add('dark');
		}

		return bodyElement.current?.classList.remove('dark');
	}, [switchState]);

	return (
		<AppContext.Provider value={contextValues}>
			<ToastContainer position='bottom-right' />

			<Layout.Container padTop spaceAround>
				<Layout.Column className='flex'>
					<Text size={24} weight={700}>
						The Shoppies
					</Text>
					<Switch
						isOn={switchState}
						onClick={handleSwitchToggle}
						label={`Switch to ${switchState ? 'Light theme' : 'Dark theme'}`}
					/>
				</Layout.Column>
				<Card>
					<Search label='Movie Title' onInputComplete={handleSearch} autoFocus />
				</Card>
				<Layout.Column setToRowOnMobile>
					<Card>
						<Layout.Container>
							{searchValue && (
								<Text weight={500} size={17}>
									Results for "{searchValue}"
								</Text>
							)}

							{contextValues.status === 'fetching' && (
								<SkeletonLoaderGroup count={Object.values(contextValues?.nominatedData || {}).length || 3} />
							)}
							{contextValues.status === 'fetched' && (
								<Layout.Container as='div'>
									{contextValues.data?.Search?.map((movie) => {
										return <MovieBox {...movie} key={`data-${movie.Title}-${movie.Year}`} />;
									})}
								</Layout.Container>
							)}
							{!contextValues.data?.Search?.length &&
								contextValues.status !== 'fetching' &&
								contextValues.status !== 'error' && (
									<EmptyState text={searchValue ? 'No result' : "You didn't enter a search text"} />
								)}
							{contextValues.status === 'error' && <EmptyState text={contextValues.error || ''} />}
						</Layout.Container>
					</Card>
					<Card>
						<Layout.Container>
							{contextValues?.nominatedData && Object.values(contextValues?.nominatedData || {}).length ? (
								<>
									<Layout.Column className='flex'>
										<Text weight={500} size={17}>
											Nominations
										</Text>
										<Button variant='destructive' onClick={contextValues.clearNominatedMovies}>
											Clear All
										</Button>
									</Layout.Column>
									{Object.values(contextValues.nominatedData).map((movie) => {
										return <NominatedBox {...movie} key={movie.Title} />;
									})}
								</>
							) : (
								<EmptyState text='You have not nominated any movie yet' />
							)}
						</Layout.Container>
					</Card>
				</Layout.Column>
			</Layout.Container>
		</AppContext.Provider>
	);
}

export default App;
