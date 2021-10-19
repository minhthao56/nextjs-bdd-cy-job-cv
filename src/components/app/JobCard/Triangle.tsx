import { Box, styled } from "@mui/system";
import { ThemeColors } from "@styles/colors";

const Shape = styled(Box)({
  width: 0,
  height: 0,
  borderTop: `5px solid transparent`,
  borderBottom: `5px solid transparent`,
  borderLeft: `5px solid ${ThemeColors.lightGreyColor}`,
});

export const Triangle = () => {
  return <Shape />;
};
