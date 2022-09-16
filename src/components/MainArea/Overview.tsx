import { Typography, Divider, Box } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function Overview() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ color: "#999999", fontSize: 21 }}>
        Overview
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          py: 2,
          pl: 2,
          pr: { xs: 2, sm: 8 },
          width: { xs: "auto", sm: "70%" },
          boxShadow: 3,
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            overflowX: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitScrollSnapType: "none",
            width: "100%",
          }}
        >
          {/* First Item */}
          <Box
            sx={{
              backgroundImage: `url("/Path1.svg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle2" sx={{ fontSize: 18 }}>
                228
              </Typography>
              <ArrowDropUpIcon sx={{ color: "#21BA30", fontSize: 30 }} />
              <Typography variant="caption" sx={{ color: "#999999" }}>
                {"+3"}
              </Typography>
            </Box>
            <Typography sx={{ color: "#4E5353", fontSize: 14 }} noWrap={true}>
              Autocentres
            </Typography>
          </Box>
          {/* Second Item */}
          <Box sx={{ display: "flex" }}>
            <Divider sx={{ mx: 4 }} orientation="vertical" flexItem />

            <Box
              sx={{
                backgroundImage: `url("/Path1.svg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" sx={{ fontSize: 18 }}>
                  44
                </Typography>
              </Box>
              <Typography noWrap={true} sx={{ color: "#4E5353", fontSize: 14 }}>
                Forms created
              </Typography>
            </Box>
          </Box>
          {/* Third item */}
          <Box sx={{ display: "flex" }}>
            <Divider sx={{ mx: 4 }} flexItem orientation="vertical" />

            <Box
              sx={{
                backgroundImage: `url("/Path1.svg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" sx={{ fontSize: 18 }}>
                  QWG3O32K
                </Typography>
              </Box>
              <Typography noWrap={true} sx={{ color: "#4E5353", fontSize: 14 }}>
                Organization key
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
