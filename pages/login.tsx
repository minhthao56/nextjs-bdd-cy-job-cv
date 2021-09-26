import React from "react";
import { Button, Input } from "@src/components";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { setCookie } from "@src/auth/cookies";

const Login = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setCookie("token", "123");
    window.location.replace("/");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Input placeholder="User name" control={control} name="user" />
          <Input placeholder="Password" control={control} name="password" />
        </Box>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
