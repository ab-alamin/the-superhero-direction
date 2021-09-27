import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Total from '../Total/Total';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("./users.json")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    const [addedMember, setAddedMember] = useState([]);
    // const [addedPrice, setAddedPrice] = useState([]);
   

    const handleAddToCart = (cart) => {
       
        
        // const newAddedPrice = [...addedPrice, newMember];
        // setAddedPrice(newAddedPrice);
       
        const newAddedmember = [...addedMember, cart];
        setAddedMember(newAddedmember);
         
        
    }
    

    
    return (
        <div>
            <div>
                 <h1 className= "bg-secondary text-white">Total Company Member:{addedMember.length}</h1>
             </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-9">
                            <div className=" row ">
                             {
                               users.map((cart) => (
                                <Cart
                                    handleAddToCart={handleAddToCart}
                                    key={cart._id.value}
                                    cart={cart}
                                 ></Cart>))
                              }
                             </div>
                         </div>
                        <div className="col-md-3 right-side">
                              <div className="bg-light">
                                  <Total addedMember={addedMember}></Total>
                                 </div>
                            </div>


                     
            
                    
                   </div>

               </div>
                
                         
                       
                   
           
           
        </div>
    );
};

export default Home;