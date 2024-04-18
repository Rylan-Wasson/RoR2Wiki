import React from "react"
import { Link } from "react-router-dom";

function Card(props) {
    return (
        props.link? (
            <Link className="m-4" to={props.link}>
                <div className={`Card flex flex-col justify-center items-center ${props.color? props.color : ""} ${props.size? props.size : "min-w-64 min-h-48 w-64 h-48"} p-2 text-2xl bg-slate-600 border-2 border-white rounded-lg`}>
                    <h3 className="font-medium underline underline-offset-2 decoration-2">{props.text}</h3>
                    { props.imageSrc? (
                        <img className={`image-container ${props.imgSize? props.imgSize : "max-w-48 h-32"} my-2 rounded-lg shadow-none`} src={props.imageSrc}></img>
                    ) : ( <></> )}
                </div>
            </Link>
        ) : (
            <div className={`Card ${props.text.includes("N/A")? "invisible" : ""} flex flex-col grow-0 justify-center items-center ${props.size? props.size : "min-w-64 min-h-48 max-w-64 max-h-64"} mx-2 my-4 p-2 text-2xl bg-slate-600 border-2 border-white rounded-lg`}>
                <h3 className={`font-medium ${props.color? props.color : ""}`}>{props.text}</h3>
                <div className="flex flex-row justify-around items-center w-full my-2">
                    { props.imageSrc? (
                        <img className={`image-container ${props.imgSize? props.imgSize : "max-w-48 h-32"} rounded shadow-none m-0`} src={props.imageSrc}></img>
                    ) : ( <></> )}
                    { props.desc? (
                        <div className="description-container ml-2 h-auto flex flex-col justify-center text-base overflow max-w-full">{
                            props.desc.split("\n").map((i, key) => {
                                return <p className="py-0.5 break-words" key={key}>{i}</p>;
                            })
                        }</div>
                    ) : ( <></> )}
                </div>
                { props.details? (
                    <> {
                        props.details.split("\n").map((i, key) => {
                            if (i.charAt(0) == '?' && i.charAt(i.length - 1) == '?') return <p className="text-lg secret min-w-full" key={key}>{i.substring(1, i.length - 1)}</p>;
                            else return <p className="text-lg" key={key}>{i}</p>;
                        })
                    } </>
                ) : ( <></> )}
                { props.xlink? (
                    <a className="font-medium underline underline-offset-2 decoration-2" href={props.xlink}>{props.xlink_text}</a>
                ) : ( <></> )}
            </div>
        )
        
    )
}

export default Card;