import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";

import FlightSearch from "./pages/FlightSearch";

const App = () => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* This is where a router would be */}
          <FlightSearch />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default App;
