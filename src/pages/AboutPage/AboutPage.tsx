import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/routes';

const AboutPage = () => (
  <div>
    Some info
    <Link to={AppRoute.ROOT}>To Main Page</Link>
  </div>
);

export default AboutPage;
