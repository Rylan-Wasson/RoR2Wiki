import React from "react";

function Counter(props) {
    return (
        <div className="flex flex-col justify-center items-center max-w-48 max-h-64 m-2 bg-slate-600 border-2 border-white rounded-lg">
            <div className="flex flex-row">
                <button onClick={() => props.fn(1)} className="w-16 bg-slate-800">+1</button>
                <button onClick={() => props.fn(5)} className="w-16 bg-slate-800">+5</button>
            </div>
            <img className={`w-32 h-32 p-2 ${props.count > 0 ? "" : "opacity-25"}`} src={props.imageSrc}></img>
            <p className="text-xl">x{props.count}</p>
            <div className="flex flex-row">
                <button onClick={() => props.fn(-1)} className="w-16 bg-slate-800">-1</button>
                <button onClick={() => props.fn(-5)} className="w-16 bg-slate-800">-5</button>
            </div>
        </div>
    )
}

export default Counter;