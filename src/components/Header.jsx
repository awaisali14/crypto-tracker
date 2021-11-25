import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  createTheme,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Crypto from "../CryptoContext";
const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
});
const Header = () => {
  const ctx = useContext(Crypto);
  const classes = useStyles();
  const navigate = useNavigate();

  console.log(ctx.currency);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h5"
              onClick={() => navigate("/")}
              className={classes.title}
            >
              Crypto Tracker
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={ctx.currency}
              onChange={(e) => {
                ctx.changeCurrency(e.target.value);
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"PKR"}>PKR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
