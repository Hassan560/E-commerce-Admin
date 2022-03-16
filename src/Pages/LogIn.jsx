import React from "react";

import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function LogIn() {
  return (
    <div>
      <Container maxWidth="xs">
        <Box p={2} mt={15} boxShadow={2} textAlign="center" borderRadius={3}>
          <Typography variant="h5" color="textSecondary">
            ADMIN
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            type="email"
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            type="password"
          />
          <br />
          <br />
          <Button variant="contained" fullWidth color="primary">
            <Typography color="secondary.light" variant="h6">
              LOGIN
            </Typography>
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default LogIn;
