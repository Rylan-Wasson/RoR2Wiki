import Subheader from "../components/Subheader";
import CardList from "../components/CardList";


const content = [
    {  text:"",xlink_text:"Steam Page", imageSrc:"links/steam_icon.svg", xlink:"https://store.steampowered.com/app/632360/Risk_of_Rain_2/" },
    { text:"",xlink_text:"OST Youtube", imageSrc:"links/youtube_icon.svg", xlink:"https://www.youtube.com/playlist?list=PLLDf8Bnp1K1JPWia6_x8-1K2sVmXGYvJD" },
    { text:"",xlink_text:"Official Twitter/X", imageSrc:"links/x_icon.svg", xlink:"https://twitter.com/RiskofRain" },
    { text:"",xlink_text:"Reddit", imageSrc:"links/reddit_icon.png", xlink:"https://www.reddit.com/r/ror2/" },
];

const LinksPage = () => {

    return ( 
        <>
            <Subheader title="External Links"/>
            <CardList cards={content} />
        </>
     );
}
 
export default LinksPage;