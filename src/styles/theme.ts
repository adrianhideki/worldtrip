// theme.js
// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
// 2. Add your color mode config

const config = {
  initialColorMode: 'light',
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
    cyan: {
      "200": "#91b0b5",
      "800": "#47585B",
    }
  },
  styles: {
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "cyan.200" : "cyan.800",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
      hr: {
        borderColor: props.colorMode === "dark" ? "cyan.200" : "cyan.800",
      }
    }),
  },
}
// 3. extend the theme
const theme = extendTheme({ ...config });
export default theme;
