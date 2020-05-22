import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
      <TextField
          label="Title"
          id="outlined-margin-none"
          //defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          label="$"
          id="outlined-margin-none"
          //defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
          //startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <TextField
          id="outlined-full-width"
          label="Description"
          style={{ margin: 8 }}
          //placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
}