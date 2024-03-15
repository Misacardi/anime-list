import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './../utils/routes';

import { Home } from '../pages/Home';
import { Favorites } from '../components/Favorites/Favorites';
import { AnimeItem } from '../components/AnimeItem/AnimeItem';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      <Route path={ROUTES.ITEM + ':id'} element={<AnimeItem />} />
    </Routes>
  );
};
