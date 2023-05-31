import React from "react";
import styles from "../novels/Novels.module.css";
import BurgerCard from "./BurgerCard";
import burgers from "../../assets/data/data.json";

function NovelsItems() {
  const burgerrs = burgers.burgers;

  return (
    <section>
      <div className={styles.new_novels}>
        <div className={styles.new_novels_card_outher}>
          {burgerrs.map((burgers) => (
            <BurgerCard
              img={burgers.img}
              title={burgers.title}
              desc={burgers.desc}
              price={burgers.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NovelsItems;
