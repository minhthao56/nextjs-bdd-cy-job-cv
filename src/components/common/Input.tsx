import React from "react";
import { InputBase, InputProps as InputBaseProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Control, Controller, FieldValues } from "react-hook-form";

const MainInput = styled(InputBase)({
  borderColor: "black",
  borderWidth: 1,
  borderStyle: "solid",
  paddingLeft: 6,
  marginBottom: 8,
});

interface InputProps extends InputBaseProps {
  control: Control<FieldValues, object>;
  name: any;
}

export const Input: React.FC<InputProps> = ({ placeholder, control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => {
        return <MainInput placeholder={placeholder} {...field} />;
      }}
    />
  );
};
