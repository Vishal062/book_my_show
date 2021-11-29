import { useContext, useState, useEffect } from "react";

import { useStory } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthContext";

const initValue = {
  username: "",
  password: "",
  city: ""
};

export const SignUp = () => {
  const [userData, setUserData] = useState(initValue);
  const { token, handleTokenChange } = useContext(AuthContex);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("#", {
      method: "POST",
      body: JSON.stringfy(userData),
      headers: {
        "content-Type": "application/json"
      }
    }).then(() => {
      console.log("Success");
    });
    e.target.reset();
  }
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
        onClick={() => {
          handleTokenChange("");
        }}
      >
        Logout
      </button>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username: &emsp;</label>
        <input
          onChange={handleChange}
          type="text"
          name="Username"
          id="username"
          placeholder="Enter your Username"
        />
        <br />

        <label htmlFor="city"> City: &emsp; </label>
        <input
          onChange={handleChange}
          type="text"
          name="city"
          id="city"
          placeholder="Enter your city"
        />
        <br />

        <label htmlFor="password"> Password: &emsp;</label>
        <input
          onChnage={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
