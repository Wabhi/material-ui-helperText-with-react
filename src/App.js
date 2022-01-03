import { Box, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useHelperTextStyles = makeStyles(() => ({
  root: {
    color: "red"
  }
}));

const EmptyTextField = (props) => {
  const { usernameOrPass } = props;
  const inputLabel = "VolunteerHub " + usernameOrPass;
  const errorMessage = "Please enter your VolunteerHub " + usernameOrPass;

  // const textFieldStyles = useTextFieldStyles(false);
  const helperTextStyles = useHelperTextStyles();
  return (
    <div>
      <TextField
        // className={textFieldStyles.root}
        placeholder={inputLabel}
        id="outlined-error-helper-text"
        defaultValue=""
        helperText={errorMessage}
        variant="outlined"
        FormHelperTextProps={{
          classes: {
            root: helperTextStyles.root
          }
        }}
      />
    </div>
  );
};

export default EmptyTextField;
