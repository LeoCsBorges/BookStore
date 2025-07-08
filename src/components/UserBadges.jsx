import {
  FavoriteBorderOutlined,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const UserBadges = () => {
  return (
    <Box display="flex" alignContent="center" gap={0.5}>
      <IconButton component={RouterLink} to="/login" color="inherit">
        <PersonOutline aria-label="Usuário ou login" />
      </IconButton>

      <IconButton component={RouterLink} to="/favoritos" color="inherit">
        <Badge badgeContent={2} color="error">
          <FavoriteBorderOutlined aria-label="Favoritados" />
        </Badge>
      </IconButton>

      <IconButton component={RouterLink} to="/carrinho" color="inherit">
        <Badge badgeContent={5} color="error">
          <ShoppingBagOutlined aria-label="Carrinho" />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default UserBadges;
