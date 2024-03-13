import { Banner } from './Banner';
import styles from './Banner.module.css';
export const Categories = () => {
  return (
    <div className={styles.parent}>
      <section className={styles.categories}>
        <h3 className={styles.title}>Categories</h3>
        <ul className={styles.list}>
          <li className={styles.item}>adventure</li>
          <li className={styles.item}>adventure</li>
          <li className={styles.item}>adventure</li>
          <li className={styles.item}>adventure</li>
          <li className={styles.item}>adventure</li>
        </ul>
      </section>
      <Banner />
    </div>
  );
};
