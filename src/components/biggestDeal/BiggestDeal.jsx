import React from 'react';
import "../biggestDeal/BiggestDeal.css";
import Card from "../card/Card";

const BiggestDeal = () => {
    return (
        <>
        <h4 className="biggestdeal_heading">Biggest Deal on Top Brands</h4>
        <div className="biggestdeal">
            <Card img="./img/topbrands/top_brand.png"/>
            <Card img="./img/topbrands/top_brand_1.png"/>
            <Card img="./img/topbrands/top_brand_2.png"/>
            <Card img="./img/topbrands/top_brand_3.png"/>
            <Card img="./img/topbrands/top_brand_4.jpg"/>
            <Card img="./img/topbrands/top_brand.png"/>
            <Card img="./img/topbrands/top_brand_1.png"/>
            <Card img="./img/topbrands/top_brand_2.png"/>
            <Card img="./img/topbrands/top_brand_3.png"/>
            <Card img="./img/topbrands/top_brand_4.jpg"/>
        </div>
        <div className="biggestdeal_second">
            <Card img="./img/topbrands/top_brand_5.png"/>
            <Card img="./img/topbrands/top_brand_6.png"/>
            <Card img="./img/topbrands/top_brand_7.png"/>
            <Card img="./img/topbrands/top_brand_8.png"/>
            <Card img="./img/topbrands/top_brand_9.jpg"/>
            <Card img="./img/topbrands/top_brand_5.png"/>
            <Card img="./img/topbrands/top_brand_6.png"/>
            <Card img="./img/topbrands/top_brand_7.png"/>
            <Card img="./img/topbrands/top_brand_8.png"/>
            <Card img="./img/topbrands/top_brand_9.jpg"/>
        </div>

        </>
    )
}

export default BiggestDeal;
