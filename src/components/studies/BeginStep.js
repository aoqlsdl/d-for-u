import React from "react";
import { Link } from "react-router-dom";
import './BeginStep.css';

function BeginStep() {
    return (
        <>        
            <ul>
                <li className="beginlist">
                    <Link to="/study/begin/1">화면 전환</Link>
                </li>
                <li className="beginlist">
                    <Link to="/study/begin/2">항목 이동</Link>
                </li>
                <li className="beginlist">
                    <Link to="/study/begin/3">창 닫기</Link>
                </li>
                <li className="beginlist">
                    <Link to="/study/begin/4">결제</Link>
                </li>
            </ul>
            <div className="gotomain">
                <Link to="/">처음으로 돌아가기</Link>
            </div>
        </>
    );
}

export default BeginStep;