import { Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar.tsx";
import HomeText from "../components/home-text.tsx";

const Index = () => {
  return (
    <>
      <Flex flexDirection="column" minHeight="100vh">
        <Navbar />
        <HomeText />
      </Flex>
    </>
  );
};
export default Index;
