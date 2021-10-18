import { ThemeColors } from "@styles/colors";
import React from "react";
import Slider from "react-slick";
import { Div, SmallJobCard } from "..";

export const CarouselBase = () => {
  return (
    <Slider
      dots={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      customPaging={(i) => {
        console.log({ i });

        return (
          <Div
            height={10}
            width={10}
            backgroundColor={ThemeColors.colorDotCarrousel}
            borderRadius={10}
          />
        );
      }}
      dotsClass="slick-dots slick-thumb"
    >
      <div>
        <SmallJobCard />
        <SmallJobCard />
        <SmallJobCard />
      </div>
      <div>
        <SmallJobCard />
        <SmallJobCard />
        <SmallJobCard />
      </div>
      <div>
        <SmallJobCard />
        <SmallJobCard />
        <SmallJobCard />
      </div>
      <div>
        <SmallJobCard />
        <SmallJobCard />
        <SmallJobCard />
      </div>
    </Slider>
  );
};
