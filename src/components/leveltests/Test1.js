import React from "react";
import { Link } from "react-router-dom";

function Test1() {
    return (
        <>        
            <div>
                레벨테스트 내용입니다.
            </div>
            <Link to="/">처음으로 돌아가기</Link>
        </>
    );
}

export default Test1;