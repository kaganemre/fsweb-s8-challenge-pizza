import OrderForm from "./components/OrderForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/index.css";
import Header from "./components/Header";
import { Switch, Route, useHistory } from "react-router-dom";
import Success from "./components/Success";
import axios from "axios";
import { useState } from "react";

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  let history = useHistory();
  const handleSubmit = (form, isValid) => {
    if (isValid) {
      axios
        .post("https://reqres.in/api/pizza", form)
        .then((response) => {
          setApiResponse([response.data]);
          history.push("/success");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <OrderForm onSubmit={handleSubmit} />
      </Route>
      <Route path="/success">
        <Success apiResponse={apiResponse} />
      </Route>
    </Switch>
  );
}

export default App;
