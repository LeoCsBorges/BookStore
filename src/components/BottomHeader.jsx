import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import CategoriesMenu from "./CategoriesMenu";
import NavMenu from "./NavMenu";
import FindStoreMenu from "./FindStoreMenu";

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
          <CategoriesMenu />

          {/* navigation  */}
          <NavMenu />
          {/* <Box>home products contact about us</Box> */}

          {/* find a store */}
          <FindStoreMenu />
        </Box>
      </Container>
    </StyledBox>
  );
};

export default BottomHeader;
