import { Typography, Box, Button, ButtonProps } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const ViewMoreButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#000000",
  backgroundColor: "none",
  border: "1px solid #53BED2",
  "&:hover": {
    backgroundColor: "#53BED2",
    color: "white",
    border: "#53BED2",
  },
  "&:focus": {
    backgroundColor: "none",
    // color: "white",
    // border: "#53BED2",
  },
}));

export default function KeyActionsArea() {
  interface Content {
    user: string;
    event: string;
    time: string;
  }
  const rows: Content[] = [
    {
      user: "SLAAB Center 1",
      event: "Added 500 agents",
      time: "02/05/2019 - 10:30pm",
    },
    {
      user: "SLAAB Center 1",
      event: "Requested forms list",
      time: "02/05/2019 - 10:30pm",
    },

    {
      user: "Fashiano Autos",
      event: "Requested forms list",
      time: "02/05/2019 - 10:30pm",
    },
    {
      user: "SLAAB Center 1",
      event: "Requested forms list",
      time: "02/05/2019 - 10:30pm",
    },
    {
      user: "SLAAB Center 1",
      event: "Requested forms list",
      time: "02/05/2019 - 10:30pm",
    },
  ];

  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Box
      sx={{
        mt: 8,
        mb: 3,
        overflow: "hidden",
      }}
    >
      <Typography variant="h6" sx={{ color: "#999999", fontSize: 21, mb: 3 }}>
        Activity log
      </Typography>

      <Box
        sx={{
          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          WebkitScrollSnapType: "none",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: 2,
        }}
      >
        <TableContainer
          sx={{
            boxShadow: 2,

            borderRadius: "10px",
            p: 2,
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitScrollSnapType: "none",
          }}
          component={Box}
        >
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Event</TableCell>
                <TableCell>Date/Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: "none",
                    },
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        {...stringAvatar(row.user)}
                        sx={{
                          width: 38,
                          height: 38,
                          bgcolor: "#ECF0F7",
                          mr: 1,
                          color: "#4E5353",
                        }}
                      />
                      <Typography
                        noWrap={true}
                        variant="subtitle2"
                        sx={{ fontSize: 14, color: "#555555" }}
                      >
                        {row.user}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      noWrap={true}
                      sx={{ color: "#53BED2", fontSize: 14 }}
                    >
                      {row.event}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      noWrap={true}
                      sx={{ color: "#555555", fontSize: 14 }}
                    >
                      {row.time}
                    </Typography>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <ViewMoreButton size="large" variant="outlined">
          <Typography sx={{ textTransform: "none" }}>
            View more activity
          </Typography>
        </ViewMoreButton>
      </Box>
    </Box>
  );
}
