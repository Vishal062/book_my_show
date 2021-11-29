import { useContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthContext";

const initValue = {
  username: "",
  password: ""
};

export const Login = () => {
  const [userData, setUserData] = useState(initValue);

  const [allUsers, setAllUsers] = useState([]);

  const { token, handleTokenChange } = useContext(AuthContext);

  const history = useHistory();

  function getUsers() {
    fetch("#")
      .then((data) => data.json())
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    getUsers();
    var newArray = allUsers.filter(
      (e) =>
        e.username === userData.username && e.password === userData.password
    );

    if (newArray.length === 0) {
      alert("No User Exist");
    } else {
      let arr = "random";
      localStorage.setItem("usertoken", JSON.stringify(arr));
      handleTokenChange(arr);
      history.push("/");
    }
    e.target.reset();
  }
  useEffect(() => {
    getUsers();
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  if (token) {
    return (
      <button
        onclick={() => {
          handleTokenChange("");
        }}
      >
        Logout
      </button>
    );
  }
  return (
    <>
      <h2>Login</h2>
      <div style={{ border: "1px solid black" }}>
        <div style={{ marginTop: "75px" }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username"> Username: &emsp;</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Username"
              style={{ height: "25px", width: "250px" }}
            />
            <br />
            <br />

            <label htmlFor="password"> Password: &emsp;</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              style={{ height: "25px", width: "250px" }}
            />
            <br />
            <br />

            <input type="submit" value="LOGIN" style={{ padding: "10px" }} />
          </form>
        </div>
      </div>
    </>
  );
};
