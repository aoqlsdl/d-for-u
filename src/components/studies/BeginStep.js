import React from "react";
import { Link } from "react-router-dom";

function BeginStep() {
    return (
        <>        
            <div>
                기초
            </div>
            <Link to="/">처음으로 돌아가기</Link>
        </>
    );
}

export default BeginStep;