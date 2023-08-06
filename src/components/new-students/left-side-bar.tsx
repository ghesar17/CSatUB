import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const LeftSideBar = () => {
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
          <a href={"/new-students/academic-information"}>
            <Flex align="center" direction={"row"}>
              <Box></Box>
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/new-students/academic-information"
                    ? "cyan"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                Academic Information
              </Text>
            </Flex>
          </a>

          <a href={"/new-students/campus-life"}>
            <Flex align="center" direction={"row"}>
              <Box></Box>
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/new-students/campus-life"
                    ? "cyan"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                Campus Life
              </Text>
            </Flex>
          </a>

          <a href={"/new-students/student-clubs"}>
            <Flex align="center" direction={"row"}>
              <Box></Box>
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/new-students/student-clubs"
                    ? "cyan"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                Student Clubs and Organizations
              </Text>
            </Flex>
          </a>
        </VStack>
      </Box>
    </>
  );
};
export default LeftSideBar;
