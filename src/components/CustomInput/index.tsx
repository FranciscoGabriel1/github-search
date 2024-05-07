import React from "react";
import TextField from "@mui/material/TextField";

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
  );
};

export default CustomInput;
