import React from "react";
import Slider from "react-slick";

import { Div } from "@src/components/common";
import { ThemeColors } from "@styles/colors";

export const CarouselBase: React.FC = ({ children }) => {
  return (
    <Slider
      dots={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      customPaging={() => {
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
      arrows={false}
    >
      {children}
    </Slider>
  );
};
