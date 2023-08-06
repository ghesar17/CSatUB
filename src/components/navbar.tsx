import { Button, Flex, Text, Link, Box } from "@chakra-ui/react";
import ColorModeSwitch from "./color-mode-switch.tsx";
import { Search2Icon, ExternalLinkIcon } from "@chakra-ui/icons";

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
        <Box marginLeft={"15vw"}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="59.000000pt"
            height="48.000000pt"
            viewBox="0 0 59.000000 48.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>
              Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g
              transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
              fill="#33C4C9"
              stroke="none"
            >
              <path
                d="M175 378 c-16 -6 -43 -20 -58 -30 -15 -11 -34 -17 -42 -14 -8 3 -15
1 -15 -5 0 -5 -11 -14 -25 -19 -24 -9 -25 -13 -21 -66 4 -42 10 -60 25 -71 12
-8 21 -21 21 -29 0 -19 20 -18 35 2 8 12 20 15 38 10 30 -7 33 -19 13 -58 -12
-23 -12 -27 0 -32 9 -4 18 4 24 20 6 14 14 23 19 20 5 -4 17 1 25 10 9 9 23
13 31 10 17 -6 20 -32 5 -41 -15 -9 -12 -25 5 -25 8 0 15 4 15 8 0 5 9 19 20
31 13 16 17 31 13 52 -6 32 1 35 54 20 22 -6 39 -5 56 4 24 12 25 11 31 -18 5
-23 1 -39 -14 -59 -24 -33 -25 -38 -2 -38 17 1 52 62 52 93 0 26 15 20 45 -15
19 -22 26 -40 23 -60 -3 -19 0 -28 9 -28 18 0 17 53 -4 98 -18 39 -27 146 -12
136 5 -3 9 -18 9 -35 0 -18 5 -29 14 -29 11 0 12 6 1 38 -11 33 -19 39 -71 57
-33 12 -84 31 -115 42 -69 27 -164 36 -204 21z m225 -58 c100 -37 110 -44 110
-81 0 -40 -39 -75 -55 -50 -7 13 -134 12 -157 0 -10 -5 -18 -18 -18 -28 0 -27
-91 -27 -116 0 -11 12 -30 19 -55 19 -57 0 -96 48 -71 88 9 13 42 6 42 -9 0
-18 30 -8 41 14 7 12 12 23 11 25 -10 14 4 36 31 48 46 21 136 11 237 -26z
m-290 -30 c0 -21 -16 -35 -24 -22 -8 13 5 53 15 46 5 -3 9 -14 9 -24z"
              />
            </g>
          </svg>
        </Box>
        <Box marginLeft="-10vw">
          <a href={"/"}>
            <Text fontSize="2xl">csatub</Text>
          </a>
        </Box>
        <Button marginLeft={"5vw"}>
          <Search2Icon />
          <input type="text" className="border-none bg-transparent" />
        </Button>
        <Button>
          <Link
            href={
              "https://engineering.buffalo.edu/computer-science-engineering.html"
            }
            isExternal
          >
            Official CS Department Page <ExternalLinkIcon mx={"2px"} />
          </Link>
        </Button>
        <ColorModeSwitch />
      </Flex>
    </>
  );
};
export default Navbar;
