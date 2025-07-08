import logo from "../assets/bookstore-logo2.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";
import SearchBar from "./SearchBar";
import UserBadges from "./UserBadges";

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
          {/* main logo */}
          <Box sx={{ width: "auto", height: 64 }}>
            <Link to="/">
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

          {/* search */}
          <SearchBar />

          {/* login, favorites, shopping cart */}
          <UserBadges />
        </Box>
      </Container>
    </StyledBox>
  );
};

export default TopHeader;
