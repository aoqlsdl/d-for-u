import React from 'react';

function Product(props) {
	const { product_name } = props;
	const { product_info } = props;
	return (
		<>
			<p>{product_name}</p>
			<p>{product_info}</p>
		</>
	);
}

export default Product;
