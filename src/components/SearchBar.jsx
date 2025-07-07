import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.dark.tone3,
  backgroundColor: theme.palette.dark.tone6,
  paddingLeft: ".75rem",
  borderRadius: 24,
  display: "flex",
  alignItems: "center",
}));

const StyledSelect = styled(Select)(() => ({
  paddingRight: 1,
  fontSize: ".875rem",
  fontWeight: "600",
  textAlign: "right",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  paddingInline: "2rem",
  borderRadius: 24,
  color: "white",
  backgroundColor: theme.palette.primary.main,

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.statusColor.warningLight,
    transition: "all .3s ease-in-out",
  },
}));

export const SearchBar = () => {
  //states
  const [category, setCategory] = useState("todas");
  const [term, setTerm] = useState("");

  function handleSearch() {
    console.log(`Buscar por: ${term}`);
    // logica de pesquisar aqui
  }

  return (
    <StyledBox>
      <Search />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar produtos..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {/* filtro por categorias */}
      <FormControl size="small" sx={{ minWidth: 176, mr: 1 }}>
        <StyledSelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
        >
          <MenuItem value="todas">Todas as categorias</MenuItem>
          <MenuItem value="ficcao">Ficção</MenuItem>
          <MenuItem value="romance">Romance</MenuItem>
          <MenuItem value="biografia">Biografia</MenuItem>
          <MenuItem value="tecnologia">Tecnologia</MenuItem>
        </StyledSelect>
      </FormControl>

      {/* iconButton */}
      <StyledIconButton onClick={handleSearch}>
        <Search />
      </StyledIconButton>
    </StyledBox>
  );
};

export default SearchBar;
