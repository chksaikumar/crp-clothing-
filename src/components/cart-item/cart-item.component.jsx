import React from 'react';
import './cart-item.styles.scss';


const CartItem =({item :{imageUrl,price,name,quantity}})=>(
    <div className="cart-item">
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x <span className='pricetag'>₹</span>{price+500}</span>

        </div>
    </div>
)

export default CartItem;