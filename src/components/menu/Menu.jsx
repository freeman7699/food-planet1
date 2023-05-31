import React from "react";
import styles from "../menu/Menu.module.css";
import MenuCard from "./MenuCard";
import pizza from "../../assets/data/data.json";

function Menu() {
  const pizz = pizza.pizza;
  return (
    <section>
      <div className={styles.menu}>
        <div className={styles.menu_outher}>
          <h3 className={styles.menu_title}>Меню</h3>
          <div className={styles.menu_list_outher}>
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}>Пицца</li>
              <li className={styles.menu_item}>Бургер</li>
              <li className={styles.menu_item}>Суши</li>
              <li className={styles.menu_item}>Роллы</li>
              <li className={styles.menu_item}>Салаты</li>
              <li className={styles.menu_item}>Десерты</li>
              <li className={styles.menu_item}>Напитки</li>
            </ul>
          </div>
          <div className={styles.select_outher}>
            <label htmlFor="select">Сортировать по:</label>
            <select className={styles.select} name="pizza" id="select">
              <option value="default">По умолчанию</option>
              <option value="pizza">Цене</option>
              <option value="mex">Названию</option>
            </select>
          </div>
        </div>
        <div className={styles.menu_card_outher}>
          {pizz.map((pizzas) => (
            <MenuCard
              img={pizzas.img}
              title={pizzas.title}
              desc={pizzas.desc}
              price={pizzas.price}
            />
          ))}
        </div>
        <input
          className={styles.menu_bottom_input}
          type="submit"
          defaultValue="Показать еще"
        />
      </div>
    </section>
  );
}
export default Menu;
