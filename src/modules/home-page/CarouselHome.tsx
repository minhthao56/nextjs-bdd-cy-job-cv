import { CarouselBase, CarouselPages, TitleBar } from "@src/components/app";
import React from "react";

export const CarouselHome = () => {
  return (
    <React.Fragment>
      <TitleBar />
      <CarouselBase>
        <CarouselPages />
        <CarouselPages />
      </CarouselBase>
    </React.Fragment>
  );
};
