import React, { useEffect, useState } from 'react';
import Allusers from '../Allusers/Allusers';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);
    

    useEffect(() =>{
        fetch("./users.json")
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])
    const [addedMember, setAddedMember] = useState([]);

    const handleAddToCart =(newMember) => {
        const newAddedmember = [...addedMember, newMember];
        setAddedMember(newAddedmember);
    }
    return (
        <div>
            <div className="row">
                <h1 className="text-danger">Total Company Member:{addedMember.length}</h1>
                <div className="col-md-9 left-side">
                    <div className="row">
                    <div>
                {
                    users.map((cart) => (
                   <Cart
                     handleAddToCart={handleAddToCart}
                        key={cart._id.value}
                        cart={cart}
                    ></Cart>))
    
                }
                </div>
                <div className="alluser-container">
                    <Allusers addedMember={addedMember}></Allusers>
    
                    
                    
                </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <h1>Member Added:{addedMember.length}</h1>
                        <h1>Total Balance:</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;