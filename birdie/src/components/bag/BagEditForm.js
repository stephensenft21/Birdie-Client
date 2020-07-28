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
            name: bag.brand,
          
        };

        API.update(editedbag)
            .then(() => props.history.push("/bags"))
    }

    useEffect(() => {
        API.getOne(props.match.params.bagId)
            .then(bag => {
                setbag(bag);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={bag.name}
                        />
                        <label htmlFor="name">bag name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="breed"
                            value={bag.breed}
                        />
                        <label htmlFor="breed">Breed</label>
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