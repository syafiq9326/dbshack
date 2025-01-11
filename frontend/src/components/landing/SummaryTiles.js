import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const cardContents = ["Current Credit Bal", "Current Cash Bal"];

export default function SummaryTiles(props) {
  return (
    props.details && (
      <Stack direction="row" spacing={2}>
        {cardContents.map((content) => (
          <Card key={content} variant="outlined">
            <React.Fragment>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  {content}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  {content === "Current Credit Bal"
                    ? props.details.carbonBalance
                    : props.details.cashBalance}
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
        ))}
      </Stack>
    )
  );
}
