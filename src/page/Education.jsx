import Video from '../components/Video';
import { useParams } from 'react-router';
import RemainingTime from '../components/RemainingTime';

function Education() {
    const { id } = useParams();
    return (
        <>
            <Video id={id} />
            <RemainingTime id={id} />
        </>
    );
}

export default Education;
