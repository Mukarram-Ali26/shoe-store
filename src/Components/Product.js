import React from 'react';
import './../App.css'; 
import Shoe from './../Shoe.json';
import {Link} from 'react-router-dom'
function Product() {
    console.log(Shoe);
  return (
    <div >
      <h1>Welcome to Product</h1>
      <div className="productc">
          {Object.keys(Shoe).map(keyName=>{
              const shoe = Shoe[keyName];
              return (
                  <Link key={keyName} to={`/Product/${keyName}`}>
                      <h4>{shoe.name}</h4>
                      <img src={shoe.img} height={150} alt="shoe" />
                  </Link>
              )
          })}
      </div>
    </div>
  );
}

export default Product;
