import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLoggedIn } from "../util/LoggedInContext";



function Header() {
    const { loggedIn, setLoggedIn } = useLoggedIn()
    const username = localStorage.getItem('username');
    
    useEffect(() => {
        if(username && username != undefined) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    return (
        <div className="header bg-sky-900/50">
            <div className="flex justify-between">
                <div className="flex w-1/4"></div>
                <div className=' flex w-1/2 justify-center'>
                    <Link to='/'>
                        <h1 className="title text-center uppercase p-4 text-yellow-100">Risk of Rain 2 Wiki</h1>
                    </Link>
                </div>
                <div className="flex w-1/4 p-4 justify-end align-center items-center">
                    {loggedIn ? ( 
                        <>
                        <h4 className="p-2 m-2 mr-0 text-lg font-medium text-yellow-100">Greetings, {username}</h4>
                        <Link to='/account' className="p-2 m-2 ml-0 rounded-full hover:bg-[#00000080]"><CiUser className="text-yellow-100 hover:text-yellow-300 text-3xl"/></Link>
                        </>
                    ) : (
                        <>
                        <Link to='/signup'>
                            <h4 className="title uppercase p-2 m-2 font-medium text-lg rounded-lg text-yellow-100 hover:text-yellow-300">SignUp</h4>
                        </Link>
                        <Link to='/login'>
                            <h4 className="title uppercase p-2 m-2 font-medium text-lg rounded-lg text-yellow-100 hover:text-yellow-300">Login</h4>
                        </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="LinkList flex flex-row items-stretch content-around text-2xl text-center">
                <Link className="Link flex flex-row flex-1 py-4 justify-center text-yellow-100" to="/">Home</Link>
                <div className="Link flex flex-col flex-1 justify-center text-yellow-100">
                    <p className="my-4">Content</p>
                    <div className="flex flex-row justify-center">
                        <div className="dropdown w-auto hidden absolute flex-col bg-sky-900/90">
                            <Link className="Link block p-4 justify-center text-yellow-100" to="/survivors">Survivors</Link>
                            <Link className="Link block p-4 justify-center text-yellow-100" to="/items">Items</Link>
                            <Link className="Link block p-4 justify-center text-yellow-100" to="/monsters">Monsters</Link>
                            <Link className="Link block p-4 justify-center text-yellow-100" to="/environments">Environments</Link>
                            <Link className="Link block p-4 justify-center text-yellow-100" to="/artifacts">Artifacts</Link>
                            <Link className="Link block p-4 justify-center text-yellow-100" to="/interactables">Interactables</Link>
                        </div>
                    </div>
                </div>
                {/* <Link className="Link flex flex-row flex-1 py-4 justify-center text-yellow-100" to="/tips">Tips & Tricks</Link> */}
                <Link className="Link flex flex-row flex-1 py-4 justify-center text-yellow-100" to="/calculator">Calculator</Link>
                <Link className="Link flex flex-row flex-1 py-4 justify-center text-yellow-100" to="/community">Community</Link>
                <Link className="Link flex flex-row flex-1 py-4 justify-center text-yellow-100" to="/news">News</Link>
                <Link className="Link flex flex-row flex-1 py-4 justify-center text-yellow-100" to="/links">External Links</Link>
            </div>
        </div>
    )
}

export default Header;

