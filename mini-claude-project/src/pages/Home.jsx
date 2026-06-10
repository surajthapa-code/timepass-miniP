import Navbar from "../components/Navbar";
import { useTheme } from "../contexts/ThemeContext";

function Home() {
  const { theme } = useTheme();
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
