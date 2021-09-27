import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    // const {Cart} =props;
    const {name, age, gender,company,balance,picture} = props.cart;
   
    return (
         
            <div className="col-md-4">
                 <div className="user-cart">
                     <div className="user-img">
                         <img src={picture} alt="" />
                     </div>

                    <div>
                        <h2 className="text-danger">Name: {name}</h2>
                         <p>Age: {age}</p>
                          <p>Gender: {gender}</p>
                          <p><small>Company Name: {company}</small></p> 
                          <h4>Balance:{balance}</h4>
                         <button
                             onClick={() =>props.handleAddToCart(props.cart)}
                              className="btn-member mb-3"
                             ><FontAwesomeIcon icon={faShoppingCart} />
                               Add To Card</button>
                         <button
                             onClick={() =>props.handleAddToPrice(props.cart)}
                              className="btn-member mb-3"
                             ><FontAwesomeIcon icon={faDollarSign} />
                               balance</button>
                      </div>
                  </div>
             </div>
        
    );
};

export default Cart;