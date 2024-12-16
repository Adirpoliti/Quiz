import { Box, styled, Typography } from "@mui/material";
import { Card, CardCover } from "@mui/joy";



export const CardStyled = styled(Card)({
    display: "flex",
    justifyContent: "center",
    height: "400px",
    width: "300px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
})

export const CardCoverStyle = styled(CardCover)({
    opacity: 1
})

export const BoxStyled = styled(Box)({
    background: "linear-gradient(to top,rgb(151, 62, 211),rgb(23, 36, 216))",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",

})