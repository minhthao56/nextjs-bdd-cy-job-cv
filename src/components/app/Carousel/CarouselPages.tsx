import * as React from "react";
import Grid from "@mui/material/Grid";
import { SmallJobCard } from "@src/components";

export const CarouselPages = () => {
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(12)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <SmallJobCard />
        </Grid>
      ))}
    </Grid>
  );
};
