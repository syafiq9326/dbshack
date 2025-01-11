import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Stack from "@mui/material/Stack";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const cardContents = ["Current Credit Bal", "Current Cash Bal"];

export default function SummaryTiles() {
  return (
    <Stack direction="row" spacing={2}>
      {cardContents.map((content) => (
        <Card variant="outlined">
          {" "}
          <React.Fragment>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                {content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      ))}
    </Stack>
  );
}
