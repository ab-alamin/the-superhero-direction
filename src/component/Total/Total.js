import React from 'react';
import './Total.css'

const Total = (props) => {
    // console.log(props);
    const {addedMember} = props;
    let total = 0;
    for(const price of addedMember){
        total = total + price.balance;
    }

    return (
        <div>
            <h1>Member Added:{addedMember.length}</h1>
            <h1>Total Balance:{total} </h1>
        </div>
    );
};

export default Total;