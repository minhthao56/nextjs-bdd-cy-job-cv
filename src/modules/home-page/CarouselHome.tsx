import { CarouselBase, CarouselPages } from "@src/components";
import React from "react";
import { TitleTypeJobs } from ".";

export const CarouselHome = () => {
  return (
    <React.Fragment>
      <TitleTypeJobs />
      <CarouselBase>
        <CarouselPages />
        <CarouselPages />
      </CarouselBase>
    </React.Fragment>
  );
};
