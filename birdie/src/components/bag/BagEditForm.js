import React, { useState, useEffect } from "react"
import API from "../../API/DataManager";


const BagEditForm = props => {
    const [bag, setbag] = useState({ brand: "" });
    const [isLoading, setIsLoading] = useState(false);


    const handleFieldChange = evt => {
        const stateToChange = { ...bag };
        stateToChange[evt.target.id] = evt.target.value;
        setbag(stateToChange);
    };

    const updateExistingbag = evt => {
        evt.preventDefault()
        setIsLoading(true);
        // This is an edit, so we need the id
        const editedbag = {
            id: props.match.params.bagId,
            brand: bag.brand,
        };
        API.update("bags", editedbag)
            .then(() => props.history.push("/bags"))
    }

    useEffect(() => {
        API.getOne("bags",props.match.params.bagId)
            .then(bag => {
                setbag(bag);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <label htmlFor="breed">this is the edit form </label>
            <form>
                <fieldset>
                    <label htmlFor="name">bag name</label>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="brand"
                            value={bag.brand}
                        />
                        <label htmlFor="breed"> </label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingbag}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default BagEditForm