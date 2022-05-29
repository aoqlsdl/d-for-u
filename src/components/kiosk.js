import React from "react";
import "./kiosk.css"

function Kiosk() {
    return (
        <>
            <div className="kiosk">
                <ul className="kiosk-category">
                    <li className="category-item">착한점심</li>
                    <li className="category-item">추천메뉴</li>
                    <li className="category-item">햄버거</li>
                    <li className="category-item">디저트/치킨</li>
                    <li className="category-item">음료/커피</li>
                </ul>
                <div className="kiosk-content">
                    <div>
                        <div className="kiosk-boxes">
                            <div className="kiosk-box">
                                <div className="product-img">제품 사진</div>
                                <div className="product-info">제품명, 가격</div>
                            </div>
                            <div className="kiosk-box">
                                <div className="product-img">제품 사진</div>
                                <div className="product-info">제품명, 가격</div>
                            </div>
                            <div className="kiosk-box">
                                <div className="product-img">제품 사진</div>
                                <div className="product-info">제품명, 가격</div>
                            </div>
                            <div className="kiosk-box">
                                <div className="product-img">제품 사진</div>
                                <div className="product-info">제품명, 가격</div>
                            </div>
                            <div className="kiosk-box">
                                <div className="product-img">제품 사진</div>
                                <div className="product-info">제품명, 가격</div>
                            </div>
                            <div className="kiosk-box">
                                <div className="product-img">제품 사진</div>
                                <div className="product-info">제품명, 가격</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kiosk;