import { Box, Grid } from "@chakra-ui/layout";
import Navbar from "./navbar.tsx";
import Sidebar from "./sidebar.tsx";

interface LayoutProps {
  main: React.ReactNode;
  lowersidebar: React.ReactNode;
  rightsidebar: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  main,
  lowersidebar,
  rightsidebar,
}) => {
  return (
    <Grid
      h="100vh"
      templateRows={{ base: "auto 1fr auto", md: "auto 1fr" }}
      templateColumns={{ base: "1fr", md: "1fr 3fr 1fr" }}
      templateAreas={{
        base: `
          "navbar"
          "main"
          "sidebar"
        `,
        md: `
          "navbar navbar navbar"
          "leftsidebar main rightsidebar"
          "lowersidebar main rightsidebar"
        `,
      }}
    >
      <Box gridArea="navbar">
        <Navbar />
      </Box>
      <Box marginLeft="8vw" gridArea="leftsidebar">
        <Sidebar />
      </Box>
      <Box marginLeft="8vw" gridArea={"lowersidebar"}>
        {lowersidebar}
      </Box>
      <Box margin={"5vw"} gridArea="main">
        {main}
      </Box>
      <Box gridArea="rightsidebar">{rightsidebar}</Box>
    </Grid>
  );
};

export default Layout;
