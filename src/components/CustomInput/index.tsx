import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { UilSearch, UilTimes } from "@iconscout/react-unicons";

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState(value);

  /*NOTE: Handles input changes and propagates them to the parent component.*/
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  /*NOTE: Clears the input field.*/
  const clearInput = () => {
    setInputValue("");
    onChange("");
  };

  /*NOTE: Triggers submit on Enter key.*/
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit();
    }
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <UilSearch color="#6D7891" size={30} />
          </InputAdornment>
        ),
        endAdornment: inputValue && (
          <InputAdornment position="end">
            <IconButton onClick={clearInput} edge="end">
              <UilTimes color="#6D7891" size={30} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomInput;
