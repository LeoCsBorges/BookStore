import styled from "@emotion/styled";
import { Workspaces } from "@mui/icons-material";
import {
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 36,
}));

const StyledSelect = styled(Select)(() => ({
  minWidth: 224,
  color: "inherit",
  textAlign: "left",
  letterSpacing: 1,

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    color: "inherit",
  },
}));

export const CategoriesMenu = () => {
  const [categories, setCategories] = useState("categories");

  return (
    <StyledFormControl>
      <StyledSelect
        sx={{ color: "inherit", textAlign: "left" }}
        size="small"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        displayEmpty
        input={
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <Workspaces
                  fontSize="small"
                  sx={{
                    color: (theme) => theme.palette.common.white,
                    mr: 0.5,
                    opacity: 0.8,
                  }}
                />
              </InputAdornment>
            }
          />
        }
      >
        <MenuItem value="categories">Categorias</MenuItem>
        <MenuItem value="ficcao">Ficção</MenuItem>
        <MenuItem value="romance">Romance</MenuItem>
        <MenuItem value="biografia">Biografia</MenuItem>
        <MenuItem value="tecnologia">Tecnologia</MenuItem>
      </StyledSelect>
    </StyledFormControl>
  );
};

export default CategoriesMenu;
