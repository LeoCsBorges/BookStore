import styled from "@emotion/styled";
import { Box, Container, Link } from "@mui/material";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  Pinterest,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.dark.tone1,
  color: theme.palette.dark.tone4,
  fontSize: theme.typography.body2.fontSize,
  paddingBlock: ".5rem",
}));

const ContactItem = ({ icon: Icon, children }) => (
  <Box display="flex" gap="4px" alignItems="center">
    <Icon fontSize="small" />
    {children}
  </Box>
);

export const Masthead = () => {
  return (
    <StyledBox>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* contact info */}
          <Box display="flex" gap="1rem">
            <ContactItem icon={WhatsApp}>(61) 99999-9999</ContactItem>
            <ContactItem icon={EmailOutlined}>info@bookstore.com</ContactItem>
          </Box>

          {/* social media icons */}
          <Box display="flex" gap="1rem" alignItems="center">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Facebook da Bookstore"
            >
              <Facebook fontSize="small" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Instagram da Bookstore"
            >
              <Instagram fontSize="small" />
            </Link>
            <Link
              href="https://pinterest.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Pinterest da Bookstore"
            >
              <Pinterest fontSize="small" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Youtube da Bookstore"
            >
              <YouTube fontSize="small" />
            </Link>
          </Box>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default Masthead;
