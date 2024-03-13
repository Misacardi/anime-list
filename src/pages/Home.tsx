import { Categories } from '../components/Categories/Categories';
import CardList from '../components/CardList/CardList';
import axios from 'axios';
import { useHttp } from '../hooks/http.hook';
import { useEffect, useState } from 'react';

export const Home = () => {
  const { request, loading } = useHttp();
  const [list, setList] = useState<AnimeInfo[]>([]);
  const [offset, setOffset] = useState(0);
  const [bool, setBool] = useState(false);

  const loadMore = () => {
    setOffset((prev) => prev + 10);
  };

  const changeFavoriteBool = (item: AnimeInfo, i: number) => {
    setList((prevData) => {
      const newData = [...prevData];
      newData[i] = { ...item, favorite: !item.favorite };
      return newData;
    });
  };

  const addFavorite = async (item: AnimeInfo, i: number) => {
    try {
      if (!item.favorite) {
        await axios.post('https://e971a4c5e7751391.mokky.dev/favorites', {
          parentId: item.id,
        });
        changeFavoriteBool(item, i);

        fetchFavorites();
      } else {
        changeFavoriteBool(item, i);
        await axios.delete(
          `https://e971a4c5e7751391.mokky.dev/favorites/${item.favoriteId}`,
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const { data } = await axios.get(
        'https://e971a4c5e7751391.mokky.dev/favorites',
      );
      const newArr = list.map((item) => {
        const favorites = data.find((e: Favorite) => e.parentId === item.id);

        if (!favorites) {
          return item;
        }

        return {
          ...item,
          favorite: true,
          favoriteId: favorites.id,
        };
      });
      setList(newArr);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllList = () => [
    request(
      `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}`,
    )
      .then((e: AnimeData) =>
        setList((prev) => [
          ...prev,
          ...e.data.map((item) => ({ ...item, favorite: false })),
        ]),
      )
      .then(() => setBool(!bool)),
  ];

  useEffect(() => {
    getAllList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bool]);
  return (
    <div>
      <Categories />
      <CardList
        list={list}
        addFavorite={addFavorite}
        loadMore={loadMore}
        loading={loading}
      />
    </div>
  );
};
