import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/routes';

const MainPage = () => (
  <div>
    Main Page
    <Link to={AppRoute.ABOUT}>To About Page</Link>
  </div>
);

export default MainPage;
