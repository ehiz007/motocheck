import { Box, Divider, Grid, Typography } from "@mui/material";
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

export interface NavItem {
  name: string;
  symbol: any;
}

export default function SideBar() {
  const routePath = "Dashboard";
  const navList: NavItem[] = [
    {
      name: "Dashboard",
      symbol: (name: string) => (
        <Icon1
          sx={{
            color: name === routePath ? blue[400] : "#5D6C76",
          }}
        />
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
    <Grid
      sx={{
        position: "relative",

        display: { xs: "none", lg: "block" },
        minHeight: "80vh",
      }}
      item
      xs={0}
      lg={3}
    >
      <Box
        sx={{
          position: "fixed",
          boxShadow: 3,
          backgroundColor: "white",
          borderRadius: 2,
          p: 2,
          width: "200px",
        }}
      >
        <Box>
          <img alt="logo" src="/logo.svg" />
        </Box>

        <Divider sx={{ my: 2 }} />
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
    </Grid>
  );
}
