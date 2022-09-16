import { Typography, Box, Stack } from "@mui/material";
import { People, Group, Files } from "../Icons";

export default function KeyActionsArea() {
  interface KeyActions {
    name: string;
    Icon: any;
    color: string;
    color2: string;
  }
  const Actions: KeyActions[] = [
    {
      name: "Form",
      Icon: <Group sx={{ color: "#000" }} />,
      color: "#FFE6D1",
      color2: "#FFBB82",
    },
    {
      name: "Autocenter",
      Icon: <People sx={{ color: "#000" }} />,
      color: "#E9F4FA",
      color2: "#B9D3D3",
    },
    {
      name: "Dispatch",
      Icon: <Files sx={{ color: "000" }} />,
      color: "#FFE3E0",
      color2: "#F5BEC8",
    },
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h6" sx={{ color: "#999999", fontSize: 21 }}>
        Key actions
      </Typography>

      <Stack spacing={{ xs: 1, sm: 4 }} direction={{ xs: "column", sm: "row" }}>
        {Actions.map((action, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "10px",
              p: 2,
              backgroundColor: action.color,
              flex: 1,
              "&:hover": { transform: "scale(1.02)" },
              cursor: "pointer",
              transition: "100ms",
              transitionTimingFunction: "ease-in-out",
              "&:focus": { transform: "scale(1.02)" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              {/* content */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "10px",
                    backgroundColor: action.color2,
                    color: "#000",
                    p: 1.5,
                    mr: 2,
                  }}
                >
                  {action.Icon}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 14 }}>Create new</Typography>
                  <Typography variant="h6" sx={{ fontSize: 16 }}>
                    {action.name}
                  </Typography>
                </Box>
              </Box>
              <svg
                width="19"
                height="8"
                viewBox="0 0 19 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464467C14.9763 0.269205 14.6597 0.269205 14.4645 0.464467C14.2692 0.65973 14.2692 0.976312 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53554C14.6597 7.7308 14.9763 7.7308 15.1716 7.53554L18.3536 4.35355ZM-4.37114e-08 4.5L18 4.5L18 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                  fill="#000000"
                />
              </svg>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
