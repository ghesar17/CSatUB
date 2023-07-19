import React from 'react'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import ColorModeSwitch from "./components/ColorModeSwitch.tsx";

const App = () => {

    return (
        <>
                <Grid templateAreas={{
                    base: `"nav experience courses professors colorModeSwitch"`,
                    lg: `"nav experience courses professors search colorModeSwitch"`
                }}>
                    <GridItem area={'nav'}> <Navbar/> </GridItem>
                    <GridItem area={'experience'} >Experience</GridItem>
                    <GridItem area={'courses'}>Courses</GridItem>
                    <GridItem area={'professors'} >Professors</GridItem>
                    <Show above={'lg'}>
                        <GridItem area={'search'} > Search </GridItem>
                    </Show>
                    <GridItem area={'colorModeSwitch'}> <ColorModeSwitch/> </GridItem>

                </Grid>

            </>
    )
}
export default App;
