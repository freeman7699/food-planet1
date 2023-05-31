import React from "react";
import styles from "../novels/Novels.module.css";

function BurgerCard({ img, title, desc, price }) {
  return (
    <div className={styles.new_novels_card}>
      <img className={styles.new_novels_card_img} src={img} alt="burger" />
      <h3 className={styles.new_novels_subTitle}>{title}</h3>
      <p className={styles.new_novels_card_text}>{desc}</p>
      <span className={styles.new_novels_card_price}>{price}</span>
      <p className={styles.new_novels_count}>
        <button className={styles.btn_subtract}>-</button>
        <span className={styles.quantity}>1</span>{" "}
        <button className={styles.btn_add}>+</button>
      </p>
      <input
        className={styles.new_novels_input}
        type="submit"
        value="В корзину"
      />
    </div>
  );
}

export default BurgerCard;
