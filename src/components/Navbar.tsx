import React from 'react'
import {Button, ButtonGroup, Grid, Box, GridItem, Show} from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Grid templateAreas={{
            base: `"experience courses professors"`,
            lg: `"experience courses professors search"`
        }}>
            <GridItem area={'experience'} bg={'dodgerblue'}>Experience</GridItem>
            <GridItem area={'courses'} bg={'coral'}>Courses</GridItem>
            <GridItem area={'professors'} bg={'red'}>Professors</GridItem>
            <Show above={'lg'}>
                <GridItem area={'search'} bg={'brown'}> Search </GridItem>
            </Show>

        </Grid>

    )
}
export default Navbar
