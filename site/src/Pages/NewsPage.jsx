import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Subheader from "../components/Subheader";
import NewsClient from "../util/NewsClient";

const NewsPage = () => {
    const [newsCards, setNewsCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await NewsClient.fetchNews()
            .then(data => data.map((news) => {
                return {
                    size: "w-[36rem] h-[24rem]",
                    text: news.title,
                    desc: "• • •\n" + (news.contents.replace(/\{[^\s]*|http[^\s]*/g, "").replace(/\. /g, ".\n")),
                    xlink: news.url,
                }
            }))
            .then((cards) => setNewsCards(cards));
        };
        fetchData();
    }, []);

    return (
        <>
            <Subheader title="News" />
            {
                newsCards.length == 0 ? (
                    <>
                        <h3 className="text-2xl pt-4">{"No news :("}</h3>
                        <h3 className="text-2xl pt-4">{"Is the server down?"}</h3>
                    </>
                ) : (
                    <></>
                )
            }
            <CardList cards={newsCards} />
        </>
    );
}

export default NewsPage;
