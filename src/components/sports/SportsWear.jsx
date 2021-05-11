import React from 'react';
import "../sports/SportsWear.css";
import Card from "../card/Card";

const SportsWear = () => {
    return (
        <>

        <h4 className="sportswear_heading">Trending in Sports Wear</h4>
        <div className="sportswear">
            <Card img ="./img/sports/sport_1.png"/>
            <Card img ="./img/sports/sport_2.png"/>
            <Card img ="./img/sports/sport_3.png"/>
            <Card img ="./img/sports/sport_4.png"/>
            <Card img ="./img/sports/sport_5.png"/>
            <Card img ="./img/sports/sport_6.png"/>
            <Card img ="./img/sports/sport_7.png"/>
            <Card img ="./img/sports/sport_1.png"/>
            <Card img ="./img/sports/sport_3.png"/>
            <Card img ="./img/sports/sport_5.png"/>
        </div>


        </>
    )
}

export default SportsWear;
