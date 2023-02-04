import { TextField } from "@mui/material";
import React from "react";

const InputText = (props) => {
  return (
    <TextField
      type={props.type}
      label={props.label}
      fullWidth
      onChange={props.onChange}
      value={props.value}
      error={props.error}
      helperText={props.helperText}
      minRows={props.min}
    />
  );
};

export default InputText;
