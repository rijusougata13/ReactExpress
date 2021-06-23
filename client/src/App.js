import React, { useEffect } from "react";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import axios from "axios";

function App() {
  const [user, setUser] = React.useState("");
  const [token, setToken] = React.useState("");
  const [formValue, setFromValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const headers = {
    "Content-Type": "application/json",
    "auth-token": token,
  };
  React.useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) setToken(tokenData);
    axios
      .get("http://localhost:5000/auth/verify", {
        headers: headers,
      })
      .then((result) => {
        if (result.status === 201) {
          setUser(result.data);
        }
      });
  }, [token]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", {
        email: formValue.email,
        password: formValue.password,
      })
      .then((token) => {
        setToken(token.data);
      });
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:5000/auth/register", {
        name: formValue.name,
        email: formValue.email,
        password: formValue.password,
      })
      .then(() => {
        alert("succesfully created ");
      })
      .catch((err) => alert(err));
  };

  const logOut = (e) => {
    setUser((prev) => null);
    localStorage.clear();
  };
  return (
    <Provider store={store}>
      <>
        {}
        <div style={{ background: "gray" }}>
          {!user ? (
            <div>
              <form>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={(e) => handleChange(e)}
                ></input>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => handleChange(e)}
                ></input>
              </form>
              <button onClick={(e) => login(e)}>login</button>
              <button onClick={(e) => signup(e)}>signUp</button>
            </div>
          ) : (
            <div>
              {user} <button onClick={(e) => logOut(e)}> Logout</button>
            </div>
          )}
        </div>
        <Home token={token} />
      </>
    </Provider>
  );
}

export default App;
