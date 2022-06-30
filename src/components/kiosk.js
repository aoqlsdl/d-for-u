import React from 'react';
import './kiosk.css';
import Product from './Product.js';
import { NavLink } from 'react-router-dom';

function Kiosk() {
	return (
		<>
			<div className="kiosk">
				<ul className="kiosk-category">
					<NavLink to="/kiosk/1" className="category-item">
						착한점심
					</NavLink>

					<NavLink to="/kiosk/2" className="category-item">
						추천메뉴
					</NavLink>

					<NavLink to="/kiosk/3" className="category-item">
						햄버거
					</NavLink>

					<NavLink to="/kiosk/4" className="category-item">
						디저트/치킨
					</NavLink>

					<NavLink to="/kiosk/5" className="category-item">
						음료/커피
					</NavLink>
				</ul>
				<div className="kiosk-content">
					<div>
						<div className="kiosk-boxes">
							<div className="kiosk-box">
								<Product className="product-img">제품 사진</Product>
								<Product className="product-info">제품명, 가격</Product>
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
