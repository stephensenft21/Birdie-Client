// populates list of products in individual category
import React, { useState, useEffect } from "react";
import API from "../../API/DataManager";
import useSimpleAuth from '../auth/useSimpleAuth';

const BagList = (props) => {
    const [bags, setBags] = useState([]);

    const getBags = () => {
        if((isAuthenticated()){

             API.getAll().then((response) => {
                setBags(response);
            });
        }
    };

    useEffect(() => {
        getBags();
    }, []);

    return (
        <div className="content">
            <div>
                <h2>Your Bags</h2>
                <div>
                    {bags.map((bag) => (
                        <bagListCard key={bag.id} bag={bag} {...props} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BagList;
