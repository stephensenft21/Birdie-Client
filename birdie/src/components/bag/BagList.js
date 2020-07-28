// populates list of products in individual category
import React, { useState, useEffect } from "react";
import API from "../../API/DataManager";
import BagListCard from "../bag/BagCard";
// import isAuthenticated from '../auth/useSimpleAuth';

const BagList = (props) => {
    const [bags, setBags] = useState([]);

    const getBags = () => {
        // if((isAuthenticated())){

        // }
        API.getAll("bags").then((response) => {
            setBags(response);
        });
    };


    useEffect(() => {
        getBags();
    }, []);

    return (
        <div className="content">
            <div>
                <h2>Your Bags</h2>
                <div>
                    {bags.map((bag, id) => (
                        <BagListCard key={id} bag={bag} {...props} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BagList;
