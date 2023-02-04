import { Button, Typography } from "@mui/material";

const LoginButton = (props) => {
  return (
    <Button
      variant="contained"
      fullWidth
      color="primary"
      onClick={props.onClick}
    >
      <Typography color="secondary.light" variant="h6">
        LOGIN
      </Typography>
    </Button>
  );
};

export default LoginButton;
