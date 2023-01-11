import AppBar from "@mui/material/AppBar";
import AirplaneLogo from "@mui/icons-material/FlightTakeoff";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <AirplaneLogo sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Flight Booker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
