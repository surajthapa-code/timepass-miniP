import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/useContext";
import { useContext } from "react";
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "40px",
        width: "99vw",
        backgroundColor: theme === "dark" ? "rgb(76, 24, 72)" : "#cb96f7",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Link
        style={{
          color: theme === "dark" ? "white" : "black",
          textTransform: "capitalize",
        }}
        to="/posts"
      >
        {" "}
        posts
      </Link>
      <button onClick={toggleTheme}>change theme</button>
    </div>
  );
}

export default Navbar;
