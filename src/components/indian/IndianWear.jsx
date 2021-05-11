import React from 'react';
import "../indian/IndianWear.css";
import Card from "../card/Card";

const IndianWear = () => {
    return (
        <>
        <h4 className="indianwear_heading">Trending in Indian Wear</h4>
        <div className="indian_wear">
            <Card img ="./img/indian/indian_1.png"/>
            <Card img ="./img/indian/indian_2.png"/>
            <Card img ="./img/indian/indian_3.png"/>
            <Card img ="./img/indian/indian_4.png"/>
            <Card img ="./img/indian/indian_5.png"/>
            <Card img ="./img/indian/indian_6.png"/>
            <Card img ="./img/indian/indian_7.png"/>
            <Card img ="./img/indian/indian_8.png"/>
            <Card img ="./img/indian/indian_9.png"/>
            <Card img ="./img/indian/indian_10.png"/>
        </div>
        <div className="indian_wear">
            <Card img ="./img/indian/indian_10.png"/>
            <Card img ="./img/indian/indian_9.png"/>
            <Card img ="./img/indian/indian_8.png"/>
            <Card img ="./img/indian/indian_7.png"/>
            <Card img ="./img/indian/indian_6.png"/>
            <Card img ="./img/indian/indian_5.png"/>
            <Card img ="./img/indian/indian_4.png"/>
            <Card img ="./img/indian/indian_3.png"/>
            <Card img ="./img/indian/indian_2.png"/>
            <Card img ="./img/indian/indian_1.png"/>
        </div>

        </>
    )
}

export default IndianWear;
