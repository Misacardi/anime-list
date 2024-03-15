import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import styles from './Nav.module.css';
import { ROUTES } from '../../utils/routes';
import logo from '/star.svg';
export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <img src='/logo.svg' alt='logo' />{' '}
      <Link to={ROUTES.HOME} className={styles.champions}>
        Anime List
      </Link>
      <Search />
      <Link to={ROUTES.FAVORITES}>
        <img src={logo} alt='' />
      </Link>
    </nav>
  );
};
