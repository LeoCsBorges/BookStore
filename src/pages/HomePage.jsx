import { Typography } from "@mui/material";
import Masthead from "../components/Masthead";

export const HomePage = () => {
    return (
        <>
            <Masthead />
            <Typography variant="h1"> 
                Teste de h1
            </Typography>
            <Typography variant="h2">
                Teste de h2
            </Typography>
            <h2>Bem-vindo ao meu bookstore!</h2>
        </>
    )
}

export default HomePage;