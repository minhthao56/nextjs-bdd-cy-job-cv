import React from "react";
import { Div, DivProps } from "./Div";

interface SectionProps extends DivProps {
  heightContent?: number | string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  heightContent,
  ...rest
}) => {
  return (
    <Div {...rest} colCenter height={heightContent}>
      <Div maxWidth={1341} width="100%" height={heightContent}>
        {children}
      </Div>
    </Div>
  );
};
