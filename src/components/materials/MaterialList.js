import React from "react";
import { Link } from "react-router-dom";

function MaterialList() {
    return (
        <>        
            <h1>자료방</h1>
            <div className="material_list">
                <ul>
                    <li><Link to="ex/1">예시1</Link></li>
                    <li><Link to="ex/2">예시2</Link></li>
                    <li><Link to="ex/3">예시3</Link></li>
                    <li><Link to="ex/4">예시4</Link></li>
                </ul>
            </div>
            <Link to="/">처음으로 돌아가기</Link>
        </>
    );
}

export default MaterialList;