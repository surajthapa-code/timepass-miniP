import { useContext } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/useContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme === "dark" ? "#170d35" : "rgb(74, 84, 130)",
          color: theme === "dark" ? "whitesmoke" : "#111",
          height: "90vh",
        }}
      >
        welcome Mere Bhai
      </h2>
    </>
  );
}

export default Home;
