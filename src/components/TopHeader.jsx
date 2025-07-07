import logo from "../assets/bookstore-logo2.png";
import styled from "@emotion/styled";
import { Box, Container, Link, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import {
  FavoriteBorderOutlined,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.dark.tone2,
  backgroundColor: theme.palette.dark.tone7,
  borderBottom: `2px solid ${theme.palette.dark.tone5}`,
  paddingBlock: "1.5rem",
}));

export const TopHeader = () => {
  return (
    <StyledBox>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* logo */}
          <Box sx={{ width: "auto", height: 64 }}>
            <Link href="/">
              <Box
                component="img"
                src={logo}
                alt="Logo Bookstore - Livros para todas as histórias"
                sx={{
                  width: "auto",
                  height: "100%",
                  display: "block",
                }}
              />
            </Link>
          </Box>

          {/* search  */}
          <Box>
            <SearchBar />
          </Box>

          {/* user, favorites, shopping cart */}
          <Box display="flex" gap=".5rem">
            <Link href="#" color="inherit">
              <PersonOutline />
            </Link>
            <Link href="#" color="inherit">
              <FavoriteBorderOutlined />
            </Link>
            <Link href="#" color="inherit">
              <ShoppingBagOutlined />
            </Link>
          </Box>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default TopHeader;
