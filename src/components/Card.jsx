import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ name, price, className }) {
  return (
    <Card
      sx={{ minWidth: 250, marginTop: "15px", color: "white" }}
      className={className}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6">
          {price}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
