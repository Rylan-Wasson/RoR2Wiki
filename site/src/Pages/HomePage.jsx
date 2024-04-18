import React, { useState } from 'react';
import Card from '../components/Card'
import CardList from '../components/CardList';
import Subheader from '../components/Subheader';

const content1 = [
    { text:"Survivors", imageSrc:"survivors/Commando.webp", link:"/survivors" },
    { text:"Items", imageSrc:"items/Lens-Maker's_Glasses.webp", link:"/items" },
    { text:"Monsters", imageSrc:"monsters/Beetle.webp", link:"/monsters" },
];

const content2 = [
    { text:"Environments", imageSrc:"environments/Titanic_Plains.webp", link:"/environments" },
    { text:"Artifacts", imageSrc:"artifacts/Artifact_Of_Command.webp", link:"/artifacts" },
    { text:"Interactables", imageSrc:"interactables/Small_Chest.webp", link:"/interactables" },
]

const other = [
    { text:"Damage Calculator", link:"/calculator" },
    { text:"Community", link:"/community" },
    { text:"News", link:"/news" },
    { text:"External Links", link:"/links" },
]

const HomePage = () => {
    return (
        <>
            <Subheader title="Content"/>
            <CardList cards={content1}/>
            <CardList cards={content2}/>
            <Subheader title="Other Pages"/>
            <CardList cards={other}/>
        </>
    );
}
 
export default HomePage;