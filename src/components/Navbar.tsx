import {Image, Button, ButtonGroup, Grid, Box, GridItem, Show, HStack} from '@chakra-ui/react'
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import logo from '../assets/CSatUBlogo.png'

const Navbar = () => {
    return (
    <HStack spacing={20}>
            <Image className="p-10" src={logo} alt={logo} />
    </HStack>

    )
}
export default Navbar
