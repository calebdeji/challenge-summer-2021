import { FC, useContext } from 'react';

import Button from 'components/Button';
import Card from 'components/Card';
import { Movie } from 'api/movies/types';
import AppContext from 'context/AppContext';
import Text from 'components/Text';

type Props = Movie;

const MovieBox: FC<Props> = (props) => {
	const { nominateMovie, nominatedData } = useContext(AppContext);

	const handleNomination = () => {
		nominateMovie(props);
	};

	return (
		<Card boxShadowType='mini' isSectioned paddingType='small' fadeIn>
			<Text>
				{props.Title} ({props.Year})
			</Text>
			<Button type='button' onClick={handleNomination} disabled={nominatedData?.hasOwnProperty(props.Title)}>
				Nominate
			</Button>
		</Card>
	);
};

export default MovieBox;
