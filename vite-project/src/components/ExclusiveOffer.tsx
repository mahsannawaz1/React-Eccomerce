import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import exclusiveImage from "../assets/images/exclusive_image.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const ExclusiveOfffer = () => {
  return (
    <Box marginX={{ base: 0, lg: "30px" }}>
      <Flex
        marginY={{
          base: 20,
          lg: 40,
        }}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justifyContent={{
          base: "center",
          md: "space-around",
        }}
        alignItems="center"
        background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(223,185,186,1) 100%)"
      >
        <Box padding={5}>
          <Box lineHeight={1}>
            <Text
              fontSize={{
                base: "40px",
                lg: "60px",
                xl: "80px",
              }}
              fontWeight="600"
            >
              <Text
                textAlign={{
                  base: "center",
                  lg: "initial",
                }}
              >
                Exclusive
              </Text>
            </Text>
            <Text
              textAlign={{
                base: "center",
                lg: "initial",
              }}
              fontSize={{
                base: "40px",
                lg: "60px",
                xl: "80px",
              }}
              fontWeight="600"
            >
              Offers For You
            </Text>
          </Box>
          <Text
            marginTop={{
              base: 4,
              lg: "initial",
            }}
            textAlign={{
              base: "center",
              lg: "initial",
            }}
            textTransform="uppercase"
            fontWeight="600"
            fontSize={{
              base: "15px",
              lg: "20px",
              xl: "26px",
            }}
          >
            Only on best seller products
          </Text>
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
                xl: 10,
              }}
              colorScheme="red"
              borderRadius="25px"
              fontWeight={"400"}
            >
              Check Now
              <Flex marginLeft={2}>
                <FaLongArrowAltRight />
              </Flex>
            </Button>
          </Flex>
        </Box>
        <Image
          src={exclusiveImage}
          objectFit="contain"
          height={{
            base: "500px",
            lg: "initial",
          }}
        />
      </Flex>
    </Box>
  );
};

export default ExclusiveOfffer;
