import { link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ dispay: "flex" }}>
      <link to="/">Home</link>
      <link to="/login">Login</link>
      <link to="/signup">Sign Up</link>
    </div>
  );
};
