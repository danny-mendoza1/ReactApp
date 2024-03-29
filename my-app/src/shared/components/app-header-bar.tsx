import CleaningServices from "@mui/icons-material/CleaningServices";
import { AppBar, Toolbar, Typography } from "@mui/material";

export function AppHeaderBar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <CleaningServices sx={{padding: 2}}/>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          RZM CLEANING SERVICES
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
