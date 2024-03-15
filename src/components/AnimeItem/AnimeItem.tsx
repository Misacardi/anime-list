import { useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { AnimeHeader } from './AnimeHeader';

export const AnimeItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState<AnimeInfo>();

  const { request } = useHttp();

  useEffect(() => {
    request(`https://kitsu.io/api/edge/anime/${id}`).then((data: SingleAnime) =>
      setItem(data.data),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(item?.attributes.description);

  return (
    <>
      <AnimeHeader item={item} />
    </>
  );
};
