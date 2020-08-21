// import React, { useState } from 'react';
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// const useStyles = makeStyles(theme => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 300
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2)
//     }
// }));
// export function SimpleSelect(props) {
//     const classes = useStyles();
//     const [diskId, setCount] = useState("");
//     const handleChange = (event, name) => {
//         console.log(name)
//         setCount(event.target.value);
//     }

//     return (
//         <div>
//             <FormControl className={classes.formControl}>
//                 {/* this dropdown determines disk type */}
//                 <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
//                 <Select
//                     name={props.compulsion}
//                     labelId="diskId" 
//                     id="diskId"
//                     value={diskId}
//                     onChange={(e) => {
//                         handleChange(e, "diskId")
//                         props.handleNumberfieldChange(e);
//                     }}
//                 >
//                     {/* {props.disk.map((disk, i) => (
//                         <MenuItem key={i} value={disk.compulsionId}>
//                             {disk.type}
//                         </MenuItem>
//                     ))} */}
//                 </Select>
//                 <FormHelperText>Select One</FormHelperText>
//             </FormControl>
//         </div>
//     );
//                     }