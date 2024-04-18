import React from "react"
import Card from "./Card";

function CardList(props) {
    return (
        <div className="CardList flex justify-evenly flex-wrap p-2"> { /* Maybe add 'items-start' */ }
            {
                props.cards.map((card, index) => {
                    return (
                        <Card key={index}
                            text={card.text}
                            size={card.size? card.size : "" }
                            imageSrc={card.imageSrc? `src/assets/images/${card.imageSrc}`:"" }
                            imgSize={card.imgSize? card.imgSize : ""}
                            link={card.link? card.link : "" }
                            desc={card.desc? card.desc : "" }
                            details={card.details? card.details : "" }
                            xlink={card.xlink? card.xlink : ""}
                            xlink_text={card.xlink_text? card.xlink_text : "Read More"}
                            color={card.color? card.color : ""}>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default CardList;
