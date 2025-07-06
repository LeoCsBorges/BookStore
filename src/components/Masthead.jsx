import styled from "@emotion/styled";
import { Box } from "@mui/material"

const StyledBox = styled(Box)(() => ({
    backgroundColor: 'red',
}));


export const Masthead = () => {
    return (
        <StyledBox>
            <p>teste</p>
        </StyledBox>
    );
};

export default Masthead;