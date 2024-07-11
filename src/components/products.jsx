import React from 'react';
import Product from './Product';
import logo from '../../public/assets/myImage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const products = [
    { id: 1, name: 'Product 1', price: 50, image: logo },
    { id: 2, name: 'Product 2', price: 60, image: logo },
    { id: 3, name: 'Product 3', price: 70, image: logo },
    { id: 4, name: 'Product 4', price: 80, image: logo },
    { id: 5, name: 'Product 1', price: 50, image: logo },
    { id: 6, name: 'Product 2', price: 60, image: logo },
    { id:7 , name: 'Product 3', price: 70, image: logo },
    { id: 8, name: 'Product 4', price: 80, image: logo },
    { id:9 , name: 'Product 1', price: 50, image: logo },
    { id:10 , name: 'Product 2', price: 60, image: logo },
    { id:11 , name: 'Product 3', price: 70, image: logo },
    { id: 12, name: 'Product 4', price: 80, image: logo }
];

const Products = () => {
    return (
       <div className=" products-container mt-4 ">
         <div className="container">
            <div className="row">
                {products.map(product => (
                    <div className="col-lg-2 col-md-4 col-6 mb-4 " key={product.id}>
                        <Product
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
}

export default Products;
