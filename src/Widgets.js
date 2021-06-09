import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__articles">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>PawsIn News</h2>
                <InfoIcon />
            </div> 
            {newsArticle("Find out which dog food are organic", "Top News = 5,679 readers")}
            {newsArticle("Learn how to speak Bird", "Education = 3,099 readers")}
            {newsArticle("Save Big on Cat litter!", "AD = 59 readers")}
            {newsArticle("Worlds richest fish- click here", "TRENDING =  10,067readers")}
            {newsArticle("Become a Programmer in just 6 months", "Future = 579 readers")}
            {newsArticle("Horse Whisper Scandal", "Media = 301 readers")}
            {newsArticle("Royal Wedding -Pets Editions", "TMZ = 80,488 readers")}
        </div>
    )
}

export default Widgets
