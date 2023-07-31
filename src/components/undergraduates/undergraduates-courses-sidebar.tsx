import { Text, VStack, Box, Flex } from "@chakra-ui/react";

const UndergraduatesCoursesSidebar = () => {
  return (
    <>
      <Text
        fontWeight="bold"
        color="teal.300"
        marginLeft={"160px"}
        fontFamily={"Signika Negative"}
      >
        Courses
      </Text>

      <Box display="flex" marginTop="-150px" padding={40}>
        <VStack spacing={"1rem"} align="flex-start">
          <a href={"/undergraduates/115"}>
            <Box
              backgroundColor={
                location.pathname === "/undergraduates/115"
                  ? "teal.600"
                  : "transparent"
              }
            >
              <Flex align="center" direction={"row"}>
                <Text
                  _hover={{ color: "white" }}
                  color={
                    location.pathname === "/undergraduates/115"
                      ? "teal.300"
                      : "gray.400"
                  }
                  fontFamily={"Inter"}
                >
                  Introduction to Computer Science I
                </Text>
              </Flex>
            </Box>
          </a>

          <a href={"/undergraduates/116"}>
            <Flex align="center" direction={"row"}>
              <Box></Box>
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/undergraduates/116"
                    ? "cyan"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                Introduction to Computer Science II
              </Text>
            </Flex>
          </a>

          <a href={"/undergraduates/220"}>
            <Flex align="center" direction={"row"}>
              <Box></Box>
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/undergraduates/220"
                    ? "cyan"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                Systems Programming
              </Text>
            </Flex>
          </a>

          <a href={"/undergraduates/250"}>
            <Flex align="center" direction={"row"}>
              <Box></Box>
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/undergraduates/250"
                    ? "cyan"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                Data Structures
              </Text>
            </Flex>
          </a>
        </VStack>
      </Box>
    </>
  );
};
export default UndergraduatesCoursesSidebar;
