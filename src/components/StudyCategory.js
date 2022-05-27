import React from "react";
import { Link } from "react-router-dom";

function StudyCategory() {
    return (
        <>
        {/* <BrowserRouter> */}
            <div className="steps">
                <div className="basic">
                    <Link to="/study/begin">기초</Link>
                </div>
                <div className="step2">
                    <Link to="/study/basic">기본</Link>
                </div>
                <div className="step3">
                    <Link to="/study/advance">심화</Link>
                </div>
                <div className="step4">
                    <Link to="/study/final">완성</Link>
                </div>
            </div>
            <Link to="/">처음으로 돌아가기</Link>
        {/* </BrowserRouter> */}
        </>
    );
}

export default StudyCategory;