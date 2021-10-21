import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input } from "@src/components/common";

export const SearchBar = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Form position="relative" onSubmit={handleSubmit(onSubmit)} zIndex={2}>
      <Input control={control} name="search-bar" />
    </Form>
  );
};
