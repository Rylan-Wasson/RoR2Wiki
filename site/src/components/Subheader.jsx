
function Subheader(props) {
    return (
        <>
            { props.title? (
                <h1 className="title uppercase p-4 text-yellow-100 break-words">{props.title}</h1>
            ) : ( <></> )}
            <hr className="mx-8 border-sky-900 border-t-2"></hr>
            { props.subtitle? (
                <h2 className="subtitle text-4xl uppercase pb-4 pt-8 text-yellow-100 break-words">{props.subtitle}</h2>
            ) : ( <></> )}
        </>
    )
}

export default Subheader;