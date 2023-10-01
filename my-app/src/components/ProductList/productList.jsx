import React from 'react'
import "./productList.css"
import Product from "./../Product/product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
    <div className="pl-texts">
    <h1 className="pl-title">A trip to imagination. It's Ziad</h1>
    <p className="pl-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et eum at veniam nostrum molestiae animi quae ipsa quod dolorem!
    </p>
    </div>
      <div className="pl-list">
      {products.map(item =>
      <Product key={item.id} img={item.img} link={item.link}/>
       )}
      </div>
    </div>
  )
}

export default ProductList;
