import React, { useState, useEffect } from 'react';
import API from "../../API/DataManager";


const BagDetail = props => {
    const [bag, setBag] = useState({ brand: "" });


    const getOneBag = () => {
        // if((isAuthenticated())){

        // }
                
        API.getOne("bags",props.bagId)
            .then(bag => {
                setBag({
                    brand: bag.brand
                });
            });
    };



    useEffect(() => {
        getOneBag()
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