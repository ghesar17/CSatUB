import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaGraduationCap, FaQuestion, FaScroll } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();

  return (
    <>
      <Box display="flex" marginBottom="-120px" padding={40}>
        <VStack marginBottom={"0px"} spacing={"1rem"} align="flex-start">
          <a href={"/new-students"}>
            <Flex align="center" direction={"row"}>
              <Box
                bg={
                  location.pathname === "/new-students"
                    ? "teal.500"
                    : "transparent"
                }
                borderRadius={"md"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                border="1px"
                borderColor={
                  location.pathname === "/new-students"
                    ? " transparent"
                    : "gray.500"
                }
                height={"1.5rem"}
                width={"1.5rem"}
              >
                <svg
                  stroke={"currentColor"}
                  fill={"white"}
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"></path>
                </svg>
              </Box>
              <Spacer px={"5px"} />
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/new-students"
                    ? "teal.300"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                New Students
              </Text>
            </Flex>
          </a>

          <a href={"/undergraduates"}>
            <Flex align="center" direction={"row"}>
              <Box
                bg={
                  location.pathname === "/undergraduates"
                    ? "teal.500"
                    : "transparent"
                }
                borderRadius={"md"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                border="1px"
                borderColor={
                  location.pathname === "/undergraduates"
                    ? " transparent"
                    : "gray.500"
                }
                height={"1.5rem"}
                width={"1.5rem"}
              >
                <FaGraduationCap
                  color={
                    location.pathname === "/undergraduates"
                      ? "teal.500"
                      : "teal.500"
                  }
                />
              </Box>
              <Spacer px={"5px"} />
              <Text
                _hover={{ color: "white" }}
                color={
                  location.pathname === "/undergraduates" ||
                  "/undergraduates/115" ||
                  "/undergraduates/116" ||
                  "/undergraduates/250" ||
                  "/undergraduates/220"
                    ? "cyan"
                    : "gray.400"
                }
                fontFamily={"Inter"}
              >
                Undergraduates
              </Text>
            </Flex>
          </a>

          <a href={"/graduates"}>
            <Flex align="center" direction={"row"}>
              <Box
                bg={
                  location.pathname === "/graduates"
                    ? "teal.500"
                    : "transparent"
                }
                borderRadius={"md"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                border="1px"
                borderColor={
                  location.pathname === "/graduates"
                    ? " transparent"
                    : "gray.500"
                }
                height={"1.5rem"}
                width={"1.5rem"}
              >
                <FaScroll className={"border-solid"} />
              </Box>
              <Spacer px={"5px"} />
              <Text
                _hover={{ color: "white" }}
                color={location.pathname === "/graduates" ? "cyan" : "gray.400"}
                fontFamily={"Inter"}
              >
                Graduates
              </Text>
            </Flex>
          </a>

          <a href={"/faq"}>
            <Flex align="center" direction={"row"}>
              <Box
                bg={location.pathname === "/faq" ? "teal.500" : "transparent"}
                borderRadius={"md"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                border="1px"
                borderColor={
                  location.pathname === "/faq" ? " transparent" : "gray.500"
                }
                height={"1.5rem"}
                width={"1.5rem"}
              >
                <FaQuestion />
              </Box>
              <Spacer px={"5px"} />
              <Text
                _hover={{ color: "white" }}
                color={location.pathname === "/faq" ? "cyan" : "gray.400"}
                fontFamily={"Inter"}
              >
                FAQ
              </Text>
            </Flex>
          </a>
        </VStack>
      </Box>
    </>
  );
};
export default Sidebar;
