import React, { useState } from 'react';
import API from '../../API/DataManager';
import { SimpleSelect } from "../MaterialComponents/MaterialSelect.js";

const DiskForm = props => {
  const [disk, setdisk] = useState({ type: "", color: "", speed: 0, glide: 0, Turn: 0, fade: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...disk };
    stateToChange[evt.target.id] = evt.target.value;
    setdisk(stateToChange);
  };
  const handleNumberfieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = +evt.target.value;
    props.setType(stateToChange);
    this.props.history.push(`/Disk/${evt.target.value}`);
  };

  

    /*  Local method for validation, set loadingStatus, create disk      object, invoke the API post method, and redirect to the full disk list
    */
    const constructNewDisk = evt => {
      evt.preventDefault();
      if (disk.type === "" || disk.color === "" || disk.speed === "" || disk.glide === ""|| disk.fade === "" || disk.turn === "") {
        window.alert("Please fill out dropdowns");
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
        <SimpleSelect
                  handleNumberfieldChange={handleNumberfieldChange} 
                  {...props}
                
                />
          <fieldset>
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