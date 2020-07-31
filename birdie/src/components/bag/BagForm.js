import React, { useState } from 'react';
import API from '../../API/DataManager';

const BagForm = props => {
    const [bag, setBag] = useState({ brand: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...bag };
        stateToChange[evt.target.id] = evt.target.value;
        setBag(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the API post method, and redirect to the full animal list
    */
    const constructNewBag = evt => {
        evt.preventDefault();
        if (bag.brand === "") {
            window.alert("Please input a bag name");
        } else {
            setIsLoading(true);
            // Create the animal and redirect user to animal list
            API.PostData("bags",bag)
                .then(() => props.history.push("/bags"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="brand"
                            placeholder="Brand Name"
                        />
                        <label htmlFor="name">Brand</label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewBag}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default BagForm