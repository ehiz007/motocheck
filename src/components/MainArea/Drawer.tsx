import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, Divider, Typography } from "@mui/material";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
} from "../Icons";
import { blue } from "@mui/material/colors";
import { NavItem } from "../SideBar";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  toggleDrawer: any;
}

export default function SwipeableEdgeDrawer(props: Props) {
  const { open, toggleDrawer } = props;
  const routePath = "Dashboard";
  const navList: NavItem[] = [
    {
      name: "Dashboard",
      symbol: (name: string) => (
        <Icon1 sx={{ color: name === routePath ? blue[400] : "#5D6C76" }} />
      ),
    },
    {
      name: "Autocenters",
      symbol: (name: string) => (
        <Icon2 sx={{ color: name === routePath ? blue[400] : "#5D6C76" }} />
      ),
    },
    {
      name: "Forms",
      symbol: (name: string) => (
        <Icon3 sx={{ color: name === routePath ? blue[400] : "#5D6C76" }} />
      ),
    },
    {
      name: "Resources",
      symbol: (name: string) => (
        <Icon4 sx={{ color: name === routePath ? blue[400] : "#5D6C76" }} />
      ),
    },
    {
      name: "Dispatch",
      symbol: (name: string) => (
        <Icon5
          sx={{
            color: name === routePath ? blue[400] : "#5D6C76",
          }}
        />
      ),
    },
    {
      name: "Groups",
      symbol: (name: string) => (
        <Icon6 sx={{ color: name === routePath ? blue[400] : "#5D6C76" }} />
      ),
    },
    { name: "Report", symbol: (name: string) => <Icon7 /> },
    {
      name: "Finance sheet",
      symbol: (name: string) => (
        <Icon8 sx={{ color: name === routePath ? blue[400] : "#5D6C76" }} />
      ),
    },
    {
      name: "Settings",
      symbol: (name: string) => (
        <Icon9 sx={{ color: name === routePath ? blue[400] : "#5D6C76" }} />
      ),
    },
  ];

  return (
    <SwipeableDrawer
      sx={{
        "& 	.MuiDrawer-paper": {
          maxHeight: "100%",
          height: "100%",
          width: "60%",
          maxWidth: "60%",
          margin: "0 0",
          // borderTopRightRadius: "20px",
          // borderTopLeftRadius: "20px",
          p: 2,
        },
      }}
      anchor={"left"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box sx={{ p: 0 }}>
        <Box
          sx={{
            backgroundColor: "white",
            border: 0,
            // mt: 1,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <img alt="logo" src="/logo.svg" />
            <CloseIcon
              onClick={toggleDrawer(false)}
              sx={{
                color: "white",
                cursor: "pointer",
                backgroundColor: "black",
                borderRadius: "50%",
                fontSize: 28,
                p: 0.7,
                // boxShadow: 2,
                mr: 1,
              }}
            />
          </Box>

          <Divider sx={{ my: 2 }}></Divider>
          {navList.map((item, index) => (
            <Box
              sx={{
                p: 1.6,
                backgroundColor: item.name === routePath ? blue[50] : "",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                my: 0.5,
                color: "primary",
              }}
              key={index}
            >
              {item.symbol(item.name)}

              <Typography
                sx={{
                  fontSize: 14,
                  color: item.name === routePath ? blue[400] : "#5D6C76",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}
