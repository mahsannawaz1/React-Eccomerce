import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import hello from "../assets/images/hello.svg";
import heroImage from "../assets/images/hero_image.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <Flex
      flexDirection={{
        base: "column",
        md: "row",
      }}
      justifyContent={{
        base: "center",
        md: "space-around",
      }}
      alignItems="center"
      background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(223,185,186,1) 100%)"
    >
      <Box>
        <Text
          textAlign={{
            base: "center",
            lg: "initial",
          }}
          textTransform="uppercase"
          fontWeight="600"
          fontSize={{
            base: "15px",
            lg: "26px",
          }}
        >
          new arrivals only
        </Text>
        <Box lineHeight={1}>
          <Text
            fontSize={{
              base: "40px",
              lg: "80px",
            }}
            fontWeight="600"
          >
            <Flex
              justifyContent={{
                base: "center",
                lg: "initial",
              }}
              alignItems={"center"}
            >
              <Text marginRight={3}>new</Text>{" "}
              <Image src={hello} boxSize={{ base: 10, lg: 20 }} />
            </Flex>
          </Text>
          <Text
            textAlign={{
              base: "center",
              lg: "initial",
            }}
            fontSize={{
              base: "40px",
              lg: "80px",
            }}
            fontWeight="600"
          >
            collections{" "}
          </Text>
          <Text
            fontSize={{
              base: "40px",
              lg: "80px",
            }}
            fontWeight="600"
          >
            for everyone
          </Text>
        </Box>
        <Flex
          justifyContent={{
            base: "center",
            lg: "initial",
          }}
        >
          <Button
            padding={"23px 25px"}
            marginTop={{
              base: 5,
              lg: 10,
            }}
            colorScheme="red"
            borderRadius="25px"
            fontWeight={"400"}
          >
            Latest Collections
            <Flex marginLeft={2}>
              <FaLongArrowAltRight />
            </Flex>
          </Button>
        </Flex>
      </Box>
      <Image
        src={heroImage}
        objectFit="cover"
        height={{
          base: "500px",
          lg: "initial",
        }}
      />
    </Flex>
  );
};

export default Hero;
