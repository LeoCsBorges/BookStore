import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import CategoriesBox from "./CategoriesBox";

const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.dark.tone2,
  backgroundColor: theme.palette.dark.tone7,
  paddingBlock: "1.25rem",
}));

export const BottomHeader = () => {
  return (
    <StyledBox>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* categories */}
          <CategoriesBox />

          {/* navigation  */}
          <Box>home products contact about us</Box>

          {/* find a store */}
          <Box>ache um loja nossa</Box>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default BottomHeader;
