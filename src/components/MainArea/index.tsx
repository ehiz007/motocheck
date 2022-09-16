import Grid from "@mui/material/Grid";
import TopBar from "./TopBar";
import Overview from "./Overview";
import KeyActionsArea from "./KeyActionsArea";
import ActivityLog from "./ActivityLog";

export default function MainArea() {
  return (
    <Grid
      item
      xs={16}
      lg={13}
      sx={{ position: "relative", px: { lg: 4, xs: 1, md: 3 } }}
    >
      <TopBar />
      <Overview />
      <KeyActionsArea />
      <ActivityLog />
    </Grid>
  );
}
