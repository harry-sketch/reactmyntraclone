import React from 'react';
import "../footwear/FootWear.css";
import Card from "../card/Card";

const FootWear = () => {
    return (
        <>
        <h4 className="footwear_heading">Trending in Footwear</h4>
        <div className="footwear">
            <Card img="./img/footwear/foot_1.jpg"/>
            <Card img="./img/footwear/foot_2.png"/>
            <Card img="./img/footwear/foot_3.png"/>
            <Card img="./img/footwear/foot_4.png"/>
            <Card img="./img/footwear/foot_5.png"/>
            <Card img="./img/footwear/foot_6.png"/>
            <Card img="./img/footwear/foot_7.png"/>
            <Card img="./img/footwear/foot_8.png"/>
            <Card img="./img/footwear/foot_9.png"/>
            <Card img="./img/footwear/foot_10.png"/>
        </div>
        </>
    )
}

export default FootWear;
