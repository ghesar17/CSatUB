import { Button, Flex, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./color-mode-switch.tsx";
import { Search2Icon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Flex
        position={"sticky"}
        top={"0"}
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        color="white"
        zIndex={1}
      >
        <a href={"/"}>
          <Text margin={""} fontSize="2xl">
            csatub
          </Text>
        </a>
        <Button>
          <Search2Icon />
          <input type="text" className="border-none bg-transparent" />
        </Button>
        <ColorModeSwitch />
        {/* Add your navigation links here */}
      </Flex>
    </>
  );
};
export default Navbar;
