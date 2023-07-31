import { Flex, Box, Button, Text, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeText = () => {
  return (
    <>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Box textAlign="center">
          <Text fontSize="6xl" fontWeight="bold" mb={4}>
            <Highlight
              query={"one place"}
              styles={{ px: "2", py: "1", bg: "yellow.100" }}
            >
              Computer Science at UB in one place
            </Highlight>
          </Text>
          <Text className="mb-4" fontSize={"2xl"}>
            Learn about the courses, environment and people behind a degree in
            CS at UB
          </Text>
          <Button as={Link} to="/new-students" colorScheme="teal">
            {" "}
            Get Started
          </Button>
        </Box>
      </Flex>
    </>
  );
};
export default HomeText;
