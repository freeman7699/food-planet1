import styles from "../novels/Novels.module.css";

function Novels() {
  return (
    <section>
      <div className={styles.new_novels}>
        <div className={styles.new_novels_outher}>
          <h3 className={styles.new_novels_title}>Новинки</h3>
          <div className="new_novels_list-outher">
            <ul className={styles.new_novels_list}>
              <li className={styles.new_novels_item}>Пицца</li>
              <li className={styles.new_novels_item}>Бургер</li>
              <li className={styles.new_novels_item}>Суши</li>
              <li className={styles.new_novels_item}>Роллы</li>
              <li className={styles.new_novels_item}>Салаты</li>
              <li className={styles.new_novels_item}>Десерты</li>
              <li className={styles.new_novels_item}>Напитки</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Novels;
