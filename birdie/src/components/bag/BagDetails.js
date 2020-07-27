import React, { useState, useEffect } from 'react';
import API from "../../API/DataManager";


const BagDetail = props => {
    const [bag, setBag] = useState({ brand: "" });

    useEffect(() => {
        //get(id) from AnimalManager and hang on to the data; put it into state
        API.getOne("bags",props.bagId)
            .then(bag => {
                setBag({
                    brand: bag.brand
                });
            });
    }, [props.bagId]);

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
           {console.log(bag)}
                <p>Brand: {bag.brand}</p>
            </div>
        </div>
    );
}

export default BagDetail;