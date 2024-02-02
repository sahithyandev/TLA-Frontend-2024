import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function PastProject({ projectName, photos, description }) {
  return (
    <Card style={{ maxWidth: 1000, margin: "16px"}}>
      <Typography variant="h6" component="div" style={{ padding: "16px" }}>
        {projectName}
      </Typography>
      <CardMedia
        component="img"
        alt={`Project ${projectName}`}
        height="auto"
        image={photos[0]} 
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PastProject;