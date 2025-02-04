import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage () {
    return (
        <div>
            Not Found Page 
            <Link to="/">Go Back to Home</Link>
        </div>
    )
}

export default NotFoundPage;