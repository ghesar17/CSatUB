import {Image, Button, ButtonGroup, Grid, Box, GridItem, Show, HStack, Text, Flex} from '@chakra-ui/react'
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import logo from '../assets/CSatUBlogo.png'

const Navbar = () => {
    return (
        <>

    {/*<HStack spacing={20}>*/}
    {/*    <Box className={"font-bold text-5xl ml-20 mt-10"}>*/}
    {/*        <h1 className={"text-cyan-200"}>csatub</h1>*/}
    {/*    </Box>*/}
    {/*    <ColorModeSwitch/>*/}
    {/*</HStack>*/}

            <Flex
                as="nav"
                justifyContent="space-between"
                alignItems="center"
                p={4}
                color="white"
            >
                <a href={'/'}>
                    <Text textColor='teal'fontSize="2xl">csatub</Text>
                </a>
                <input placeholder={"Search"}/>
                <ColorModeSwitch/>
                {/* Add your navigation links here */}
            </Flex>
        </>
    )
}
export default Navbar
