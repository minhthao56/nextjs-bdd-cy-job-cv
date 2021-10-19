import { Div } from "@src/components";
import { ThemeColors } from "@styles/colors";

export const Dot = () => {
  return (
    <Div
      width={4}
      height={4}
      borderRadius={4}
      backgroundColor={ThemeColors.lightGreyColor}
      marginLeft={1}
    />
  );
};
