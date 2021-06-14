import Button from "../components/Button";
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
    <>
      <header>
        Ha young Design
        <Button onClick={onClickToggleTheme}>Switch Mode</Button>
        <Button
          isAnchor
          isNewTap
          href="https://github.com/hayoung-jeremy"
          rel="noreferrer"
        >
          Github
        </Button>
      </header>
      <Main />
      <footer>©2021. Ha Young, Kim. all rights reserved.</footer>
    </>
  );
}

export default App;
