import React, { useState } from 'react';
import API from '../../modules/API';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const DiskForm = props => {
  const [disk, setdisk] = useState({ type: "", color: "", speed: 0, glide: 0, Turn: 0, fade: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...disk };
    stateToChange[evt.target.id] = evt.target.value;
    setdisk(stateToChange);
  };
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));
  function SimpleSelect(props) {
    const classes = useStyles();
    const [diskId, setCount] = React.useState("");

    const handleChange = (event, name) => {

      console.log(name)
      setCount(event.target.value);


    }
    return (
      <div>
        
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Compulsion</InputLabel>
          <Select
          name={props.compulsion}
            
            labelId="diskId"
            id="diskId"
            value={diskId}
            onChange={(e) => {
             handleChange(e,"diskId")
              props.handleNumberfieldChange(e);
            }}
          >
            {props.disk.map((disk, i) => (
              <MenuItem key={i} value={disk.compulsionId}>
                {disk.description}
              </MenuItem>
              
            ))}
          </Select>
          <FormHelperText>Select One</FormHelperText>
        </FormControl>
      </div>
    );
    
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