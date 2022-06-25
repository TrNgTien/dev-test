import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function MainLayout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
