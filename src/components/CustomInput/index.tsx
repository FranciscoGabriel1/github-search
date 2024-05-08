import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
    onChange("");
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: inputValue && (
          <InputAdornment position="end">
            <IconButton onClick={clearInput} edge="end">
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomInput;
