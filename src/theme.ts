import { extendTheme, type ThemeConfig} from '@chakra-ui/react'

const config : ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ config,
    colors: {
        teal: {
            100: '#53d4ce'
        },
        gray: {
            100: '#718096'
        }
    },
    fonts: {
        body : `'Roboto Mono Variable', sans-serif`,
        text: `'Roboto Mono Variable', sans-serif`,

},
})

export default theme