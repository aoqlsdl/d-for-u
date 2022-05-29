import React from "react";
import { Link } from "react-router-dom";
import "./Gotomain.css";

function Gotomain() {
    return (
        <div className="gotomain">
            <Link to="/">처음으로 돌아가기</Link>
        </div>
    )
}

export default Gotomain;