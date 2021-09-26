import React from "react";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Control, Controller, FieldValues } from "react-hook-form";

const MainInput = styled(InputBase)({
  borderColor: "black",
  borderWidth: 1,
  borderStyle: "solid",
  paddingLeft: 6,
  marginBottom: 8,
});

interface IMainInput extends IInput {
  control: Control<FieldValues, object>;
  name: any;
}

export const Input: React.FC<IMainInput> = ({ placeholder, control, name }) => {
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
