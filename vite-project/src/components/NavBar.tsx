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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import CartContext from "../assets/contexts/cartContext";
import AuthContext from "../assets/contexts/authContext";
import { User } from "../services/useAuth";
const NavBar = () => {
  const { cart } = useContext(CartContext);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
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
      <Link to="/">
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
      </Link>
      <Show above="lg">
        <UnorderedList
          display="flex"
          alignItems={"center"}
          listStyleType="none"
          gap={{
            base: "5",
            lg: "12",
          }}
          fontSize={18}
        >
          <ListItem fontWeight={"500"}>
            <NavLink to="/">Shop</NavLink>
          </ListItem>
          <ListItem paddingTop={"2.5px"}>
            <Menu isLazy>
              <MenuButton
                fontWeight={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="outline"
                border={0}
                fontSize={18}
              >
                Clothing
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NavLink to="/men">Men</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/women">Women</NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </ListItem>

          <ListItem fontWeight={"500"}>
            <NavLink to="/electronics">Electornics</NavLink>
          </ListItem>
          <ListItem fontWeight={"500"}>
            <NavLink to="/jewelery">Jewelery</NavLink>
          </ListItem>
        </UnorderedList>
      </Show>
      <Flex gap={8}>
        <Show above="lg">
          <Button
            onClick={(event) => {
              if (event.currentTarget.textContent == "Login")
                navigate("/login");
              else {
                dispatch({ type: "GET", user: {} as User });
                event.currentTarget.textContent = "Login";
              }
            }}
            borderRadius={"35px"}
            background="white"
            paddingX={7}
            border={"1px solid lightgray"}
          >
            {user.email ? "Logout" : "Login"}
          </Button>
        </Show>
        <NavLink to="/cart">
          <Box position={"relative"}>
            <AiOutlineShoppingCart size={35} />
            <Badge
              position={"absolute"}
              top={"0px"}
              right="0px"
              colorScheme="red"
            >
              {cart.cartItems.length}
            </Badge>
          </Box>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;
