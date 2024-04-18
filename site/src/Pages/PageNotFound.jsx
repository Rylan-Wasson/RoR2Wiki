import React from "react";
import { Link } from 'react-router-dom'
import Subheader from "../components/Subheader";

const PageNotFound = () => (
    <div className="PageNotFound">
        <Subheader title="404 - Page Not Found"/>
        <h1 className="title uppercase p-4 text-yellow-100">Sorry, that page doesn't exist.</h1>
        <Link to ="/"><h1 className="title uppercase underline p-4 text-yellow-100">Back to homepage</h1></Link>
    </div>
);
export default PageNotFound