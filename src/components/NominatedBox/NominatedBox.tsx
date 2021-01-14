import { Movie } from 'api/movies/types';
import Button from 'components/Button';
import Card from 'components/Card';
import Text from 'components/Text';
import AppContext from 'context/AppContext';
import { FC, useContext } from 'react';

type Props = Movie;

const NominatedBox: FC<Props> = (props) => {
	const { removeNominatedMovie } = useContext(AppContext);

	const handleRemoveMovie = () => {
		removeNominatedMovie(props);
	};

	return (
		<Card boxShadowType='mini' isSectioned paddingType='small' fadeIn>
			<Text>
				{props.Title} ({props.Year})
			</Text>
			<Button variant='destructive' onClick={handleRemoveMovie}>
				Remove
			</Button>
		</Card>
	);
};

export default NominatedBox;
