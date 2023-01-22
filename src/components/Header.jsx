import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../themes";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Typography>{subtitle}</Typography>
      </Box>
    </>
  );
};

export default Header;
