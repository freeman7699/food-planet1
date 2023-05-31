import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Novels from "./components/novels/Novels";
import NovelsItems from "./components/novels/NovelsItems";
import Menu from "./components/menu/Menu";
import Advantages from "./components/advantages/Advantages";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Novels />
        <NovelsItems />
        <Menu />
        <Advantages />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default App;
