import { LocationOn } from "@mui/icons-material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const FindStoreMenu = () => {
  return (
    <Link
      sx={{ display: "flex", alignItems: "center" }}
      component={RouterLink}
      to="/find-a-store"
      color="inherit"
      underline="hover"
      fontSize={".75rem"}
    >
      <LocationOn fontSize="small" />
      Encontre uma BookStore
    </Link>
  );
};

export default FindStoreMenu;
