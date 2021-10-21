import React from "react";
import { Div, DivProps } from "./Div";

interface SectionProps extends DivProps {}

export const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <Div {...rest} colCenter>
      <Div maxWidth={1341} width="100%">
        {children}
      </Div>
    </Div>
  );
};
