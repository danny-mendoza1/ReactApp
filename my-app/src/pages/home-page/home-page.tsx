import { Box, Button, Grid, Typography } from "@mui/material";
import { PLACE_HOLDER_TEXT } from "../../shared/constants";

export function HomePage() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12} lg={6}>
        <img src="/cleaning-stock-photo.jpg" alt="cleaning" width='100%'/>
      </Grid>
      <Grid item xs={12} lg={6} paddingLeft={8} paddingTop={4}>
        <Typography variant="h6"> Welcome to RZM cleaning services! </Typography>
        <Typography variant="h6" paddingTop={2}> {PLACE_HOLDER_TEXT} </Typography>
        <Box paddingTop={4} paddingLeft={24}>
        <Button variant='contained'> Request Your Free Cleaning Estimate </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
