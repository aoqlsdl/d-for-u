import React from "react";
import './FirstCategory.css';
import {Link} from "react-router-dom"

function FirstCategory() {
    return (
            <div className="first_category">
                <div className="first_category_row1">
                    <div className="material">
                        <Link to="/material">자료방</Link>
                    </div>
                    <div className="practice">
                        <Link to="/practice">실습</Link>            
                    </div>
                </div>
                <div className="first_category_row2">
                    <div className="study">
                        <Link to="/study">선택학습</Link>            
                    </div>
                    <div className="leveltest">
                        <Link to="/leveltest">레벨테스트</Link>
                    </div>
                </div>
            </div>
    );
}

export default FirstCategory;