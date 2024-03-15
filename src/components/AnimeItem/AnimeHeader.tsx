import { FC } from 'react';
import styles from './AnimeItem.module.css';

interface AnimeHeader {
  item?: AnimeInfo;
}

export const AnimeHeader: FC<AnimeHeader> = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className={styles.header}>
      <div className={styles.titles}>
        <img src={item.attributes.posterImage.large} alt='poster' />
        <h3>{item.attributes.canonicalTitle}</h3>
        <div>{item.attributes.titles.ja_jp}</div>
      </div>

      <div className={styles.information}>
        <table className={styles.table}>
          <tr>
            <td className={styles.titleInfo}>🎬Type</td>
            <td>{item.type}</td>
          </tr>
          <tr>
            <td className={styles.titleInfo}>📺Subtype</td>
            <td>{item.attributes.subtype}</td>
          </tr>
          <tr>
            <td className={styles.titleInfo}>🎉Status</td>
            <td>{item.attributes.status}</td>
          </tr>
          <tr>
            <td className={styles.titleInfo}>🔞Age Rating</td>
            <td>{item.attributes.ageRatingGuide}</td>
          </tr>
          <tr>
            <td className={styles.titleInfo}>📅Aired from </td>
            <td>
              {item.attributes.startDate} to {item.attributes.endDate}
            </td>
          </tr>
        </table>
        <div className={styles.descTitle}> Description</div>

        <div className={styles.description}>{item.attributes.description}</div>
      </div>
    </div>
  );
};
