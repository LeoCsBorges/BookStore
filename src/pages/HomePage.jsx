import { Container } from "@mui/material";
import Masthead from "../components/Masthead";

export const HomePage = () => {
    return (
        <>
            <Container>
                <Masthead />
                <h2>Bem-vindo ao meu bookstore!</h2>
            </Container>
        </>
    )
}

export default HomePage;