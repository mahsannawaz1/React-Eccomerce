import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import hello from "../assets/images/hello.svg";
import heroImage from "../assets/images/hero_image.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(223,185,186,1) 100%)"
    >
      <Box>
        <Text textTransform="uppercase" fontWeight="600" fontSize="26px">
          new arrivals only
        </Text>
        <Box>
          <Heading fontSize="80px" fontWeight="600">
            <Flex alignItems={"center"}>
              <Text marginRight={5}>new</Text>{" "}
              <Image src={hello} boxSize={20} />
            </Flex>
          </Heading>
          <Heading fontSize="80px" fontWeight="600">
            collections{" "}
          </Heading>
          <Heading fontSize="80px" fontWeight="600">
            for everyone
          </Heading>
        </Box>
        <Button
          padding={"20px 25px"}
          marginTop={10}
          colorScheme="red"
          borderRadius="25px"
          fontWeight={"400"}
        >
          Latest Collections
          <Flex marginLeft={2}>
            <FaLongArrowAltRight />
          </Flex>
        </Button>
      </Box>
      <Image src={heroImage} />
    </Flex>
  );
};

export default Hero;
