import React from "react";
import "../dealsDay/DealsOfDay.css";
import Card from "../card/Card";

const DealsOfDay = () => {
  return (
    <>
      <h4 className="dealsofday_heading">Deals of the Day</h4>
      <div className="dealsofday">
        <Card img="./img/dealsday/card.png" />
        <Card img="./img/dealsday/card_1.png" />
        <Card img="./img/dealsday/card_2.png" />
        <Card img="./img/dealsday/card_3.png" />
        <Card img="./img/dealsday/card_4.png" />
        <Card img="./img/dealsday/card.png" />
        <Card img="./img/dealsday/card_1.png" />
        <Card img="./img/dealsday/card_2.png" />
        <Card img="./img/dealsday/card_3.png" />
        <Card img="./img/dealsday/card_4.png" />
      </div>
    </>
  );
};

export default DealsOfDay;
