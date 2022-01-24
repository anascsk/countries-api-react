
import Login from "./components/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <CountryList countries={countries} />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
