import React from "react";
import svg from "../../assets/img/header_img/logo_food_planet.svg";
import svg2 from "../../assets/img/header_img/phone1.svg";
import svg3 from "../../assets/img/header_img/buy_1.svg";
import styles from "../header/Header.module.css";

function Header() {
  return (
    <section>
      <div className="header">
        <nav className={styles.nav}>
          <div className="header-logo">
            <a className={styles.ul_li_a} href="main">
              <img src={svg} alt="Логотип" />
            </a>
          </div>
          <ul className={styles.nav_ul}>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="main">
                Главная
              </a>
            </li>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="main">
                Меню
              </a>
            </li>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="main">
                Доставка
              </a>
            </li>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="main">
                Контакты
              </a>
            </li>
          </ul>
          <div className="icon">
            <img src={svg2} alt="img" />
            <span className={styles.phoneNumber}>+996500405988</span>
            <img src={svg3} alt="img" />
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
