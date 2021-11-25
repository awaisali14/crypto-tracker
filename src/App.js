import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
function App() {
  const useStyles = makeStyles({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  });
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
