import React from "react";
import { Link } from "react-router-dom";

function MaterialItem() {
    return (
        <>        
            <div>
                <h1>상세 페이지</h1>
                <div className="title">제목</div>
                <div className="content">내용</div>
            </div>
            <Link to="/">처음으로 돌아가기</Link>
        </>
    );
}

export default MaterialItem;