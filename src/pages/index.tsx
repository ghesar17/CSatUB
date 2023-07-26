import {Flex, Text, Grid,Button, Box, GridItem} from "@chakra-ui/react";
import Navbar from "../components/Navbar.tsx";
import WelcomeText from "../components/home/WelcomeText.tsx";


const Index = () => {
    return (
       <>
           <Flex flexDirection="column" minHeight="100vh">
               <Navbar/>
                <WelcomeText/>
           </Flex>
       </>
    )
}
export default Index




