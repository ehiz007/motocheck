import { Typography, Box, Avatar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "./Drawer";
import { useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={{
        boxShadow: 2,
        borderRadius: "5px",
        backgroundColor: "white",
        p: 1,
        display: "flex",
        alignItems: "center",
        mt: { xs: 1, md: 0 },
      }}
    >
      <Drawer open={open} toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          position: "sticky",
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        <MenuRoundedIcon
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", md: "none" },
            color: "white",
            cursor: "pointer",
            backgroundColor: "black",
            borderRadius: "50%",
            fontSize: 30,
            p: 1.0,
            boxShadow: 2,
            mr: 1,
          }}
        />
        <Typography variant="h6" sx={{ color: "#080511", fontSize: 18 }}>
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src="/avatar.png"
          sx={{ width: 38, height: 38 }}
        />
      </Box>
      <KeyboardArrowDownIcon sx={{ color: "black", fontSize: 22 }} />
    </Box>
  );
}
