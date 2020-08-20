import React, { useState, useEffect } from 'react';
import API from '../../API/DataManager';
import { SimpleSelect } from "../MaterialComponents/MaterialSelect.js";

const DiskForm = props => {
  const [disk, setdisk] = useState({ });
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
      if (disk.type === "" || disk.color === "" || disk.speed === "" || disk.glide === ""|| disk.fade === "" || disk.turn === "") {
        window.alert("Please fill out dropdowns");
      } else {
        setIsLoading(true);
        // Create the disk and redirect user to disk list
        API.post(disk)
          .then(() => props.history.push("/disks"));
      }
    };

    const getDisks = () => {
      // After the data comes back from the API, we
      //  use the setAnimals function to update state
      return API.getAll("disks").then(data => {
        setdisk(data)
      });
    };

     useEffect(() => {
      getDisks()
     }, [])
    

    return (
      <>
        <form>
          <div>
         
          <SimpleSelect
                  handleNumberfieldChange={props.handleNumberfieldChange}
                 
                  {...props}
                  key={props.type}
                />
          </div>
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