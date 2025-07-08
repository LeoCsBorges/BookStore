import { Box, Link } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const NavMenu = () => {
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Produtos", to: "/produtos" },
    { label: "Contato", to: "/contato" },
    { label: "Sobre nós", to: "/sobre-nos" },
  ];

  return (
    <Box display="flex" gap={3} fontWeight={600}>
      {links.map((link) => (
        <Link
          key={link.to}
          component={RouterLink}
          to={link.to}
          color={location.pathname === link.to ? "primary.main" : "inherit"}
          underline="hover"
          sx={{ transition: ".2s" }}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};

export default NavMenu;
