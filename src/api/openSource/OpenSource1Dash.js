import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const OpenSourceDash = () => {
  return (
    <Box>
      <NavBar link="/OpenSourceDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default OpenSourceDash;
