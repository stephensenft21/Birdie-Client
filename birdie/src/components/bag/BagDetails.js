import React, { useState, useEffect } from 'react';
import API from "../../API/DataManager";


const BagDetail = props => {
    const [bag, setBag] = useState({ brand: "" });
    const [bags, setBags] = useState([]);


    const getOneBag = () => {
        // if((isAuthenticated())){

        // }

        API.getOne("bags", props.bagId)
            .then(bag => {
                setBag({
                    brand: bag.brand
                });
            });
    };
    const deleteBag = (id) => {
        API.deleteUserData("bags", id).then(() => API.getAll("bags").then(setBags)).then(props.history.push("/bags"));
    };



    useEffect(() => {
        getOneBag()
    }, [props.bagId]);

    return (
        <div className="card">
            <div>this is bag details</div>
            <div className="card-content">
                <picture>
                    {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                </picture>
                <button type="button" onClick={() => deleteBag(props.bagId)}>Discharge</button>
                <p>Brand: {bag.brand}</p>
                <button type="button"
                    onClick={() => props.history.push(`/bags/${props.bagId}/edit`)}>
                    Edit
</button>
            </div>
        </div>
    );
}

export default BagDetail;