import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode();

    return (
        <HStack>
            <Switch colorScheme={'green'} isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text  textColor={'teal'}>Dark Mode</Text>
        </HStack>
    )
}
export default ColorModeSwitch
