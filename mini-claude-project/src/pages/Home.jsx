import Navbar from "../components/Navbar";
import { useTheme } from "../contexts/ThemeContext";
import { ReducerComp } from "../reducer";

function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme === "dark" ? "#170d35" : "rgb(74, 84, 130)",
          color: theme === "dark" ? "whitesmoke" : "#111",
          height: "90vh",
        }}
      >
        <h2> welcome Mere Bhai </h2>
        <ReducerComp />
      </div>
    </>
  );
}

export default Home;
