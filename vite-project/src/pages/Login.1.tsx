import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import useAuth from "../services/useAuth";
import { FieldValues, useForm } from "react-hook-form";
import AuthContext from "../assets/contexts/authContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: users } = useAuth();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const onSubmit = (data: FieldValues) => {
    const user = users?.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      dispatch({ type: "GET", user });
      navigate("/");
    } else {
      setError("Invalid Username or password");
    }
  };
  return (
    <Flex
      height={"calc(100vh - 82px)"}
      justifyContent={"center"}
      alignItems={"center"}
      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(223,185,186,1) 100%)"
    >
      <Box background="#fff" padding={10}>
        <Heading textAlign={"center"} marginBottom={3}>
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <Text marginTop={3} color={"red"}>
              {error}
            </Text>
          )}
          <FormControl>
            <Input
              isRequired
              {...register("email")}
              id="email"
              borderRadius={0}
              type="email"
              placeholder="Enter Email"
              marginBottom={5}
            />
            <InputGroup size="md">
              <Input
                isRequired
                id="password"
                {...register("password", {
                  minLength: 5,
                })}
                borderRadius={0}
                type={show ? "text" : "password"}
                placeholder="Enter Password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  borderRadius={0}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password?.type == "minLength" && (
              <Text color="red">
                Password must be atleast 5 Characters long
              </Text>
            )}
            <Flex direction="row" marginY={3}>
              <Checkbox {...register("check")} id="check" isRequired>
                By agreeing, I agree to the terms of use and privacy policy
              </Checkbox>
            </Flex>
            <Flex justifyContent={"center"}>
              <Button colorScheme="red" type="submit" borderRadius={0}>
                Continue
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};
export default Login;
