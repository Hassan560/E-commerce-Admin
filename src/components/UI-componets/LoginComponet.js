import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const LoginComponet = (props) => {
  return (
    <Container maxWidth="xs">
      <Box p={2} mt={15} boxShadow={2} textAlign="center" borderRadius={3} >
        <Typography variant="h5" color="textSecondary">
          ADMIN
        </Typography>
      </Box>
        <br/>
      {props.children}
    </Container>
  );
};

export default LoginComponet;
