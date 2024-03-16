import {
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Text,
  Box,
  Badge,
  Button,
  Show,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navListItems = ["Shop", "Clothing", "Electornics", "Jewelery"];
  return (
    <Flex
      borderBottom={"2px solid #F4F4F4"}
      justifyContent={{
        base: "space-between",
        lg: "space-around",
      }}
      alignItems="center"
      padding={{
        base: "8px",
        lg: "0px",
      }}
    >
      <Flex alignItems="center">
        <Image
          src={logo}
          boxSize={{
            base: "40px",
            lg: "80px",
          }}
          objectFit="cover"
        />
        <Text
          textTransform="uppercase"
          fontWeight={"700"}
          fontSize={{
            base: 15,
            lg: 30,
          }}
        >
          Shopper
        </Text>
      </Flex>
      <Show above="md">
        <UnorderedList
          display="flex"
          listStyleType="none"
          gap={{
            base: "5",
            lg: "12",
          }}
          fontSize={18}
          paddingTop={2}
        >
          {navListItems.map((item, index) => (
            <ListItem key={index} fontWeight={"500"}>
              <Link to="">{item}</Link>
              <Flex justifyContent={"center"} marginTop={"3px"}>
                <Box
                  width={"80%"}
                  height="3px"
                  borderRadius={"10px"}
                  background="#eb4d4d"
                ></Box>
              </Flex>
            </ListItem>
          ))}
        </UnorderedList>
      </Show>
      <Flex gap={8}>
        <Show above="md">
          <Button
            borderRadius={"35px"}
            background="white"
            paddingX={7}
            border={"1px solid lightgray"}
          >
            Login
          </Button>
        </Show>
        <Box position={"relative"}>
          <AiOutlineShoppingCart size={35} />
          <Badge
            position={"absolute"}
            top={"0px"}
            right="0px"
            colorScheme="green"
          >
            1
          </Badge>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
