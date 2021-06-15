import Button from "../components/Button";
import { ThemeProvider } from "styled-components";
import Main from "../pages/Main";

// light mode, dark mode toggle button
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}

const onClickToggleTheme = () => {
  // toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-theme");

  // default theme : light mode
  let theme = "light";

  // save the selected theme in localStorage
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
};

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          main: "#1e96fc",
          grayScale: "#333",
          warning: "#ffc600",
          error: "#db3069",
        },
      }}
    >
      <header>
        Ha young Design
        <div>
          <Button color="grayScale" onClick={onClickToggleTheme}>
            Switch Mode
          </Button>
          <Button
            isAnchor
            isNewTab
            href="https://github.com/hayoung-jeremy"
            rel="noreferrer"
            color="main"
          >
            Github
          </Button>
          <Button color="warning" outline>
            warning
          </Button>
          <Button color="error">error</Button>
        </div>
      </header>
      <Main />
      <footer>©2021. Ha Young, Kim. all rights reserved.</footer>
    </ThemeProvider>
  );
}

export default App;
