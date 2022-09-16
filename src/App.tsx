import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import SideBar from "./components/SideBar";
import MainArea from "./components/MainArea";

export default function App() {
  return (
    <Paper
      sx={{
        backgroundColor: "#fafafe",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Grid sx={{ p: { xs: 1, md: 3 } }} container columns={16}>
        <SideBar />
        <MainArea />
      </Grid>
    </Paper>
  );
}
