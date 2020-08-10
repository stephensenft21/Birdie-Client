import React, { useState } from 'react';
import API from '../../modules/API';

const DiskForm = props => {
  const [disk, setdisk] = useState({ type: "", color: "", speed: 0 , glide: 0, Turn: 0, fade: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...disk };
    stateToChange[evt.target.id] = evt.target.value;
    setdisk(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create disk      object, invoke the API post method, and redirect to the full disk list
  */
  const constructNewDisk = evt => {
    evt.preventDefault();
    if (disk.type === "" || disk.color === "", disk.speed === "" || disk.glide === "", disk.fade === "" || disk.turn === "") {
      window.alert("Please fill out drops");
    } else {
      setIsLoading(true);
      // Create the disk and redirect user to disk list
      API.post(disk)
        .then(() => props.history.push("/disks"));
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
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewDisk}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default DiskForm