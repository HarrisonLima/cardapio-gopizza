import { createGlobalStyle } from "styled-components";
import Rotas from "./routes";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  };

  html ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  };

  html ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border: 1px solid var(--border-color);
    border-radius: 50px;
  };

  html ::-webkit-scrollbar-track {
    background: transparent;
  };

  :root{
    background-color: var(--background-color);
    color: var(--secondary-color);
    font-family: var(--font-style);
    font-size: 16px;

    --primary-color: #E7E7E7;
    --secondary-color: #C9C9C9;

    --font-style: "Jost", sans serif;

    --background-color: #121212;
    --border-color: #585858;

    --light-box-effect: rgba(231, 231, 231, 0.3) 0px 10px 36px 0px,
      rgba(231, 231, 231, 0.1) 0px 0px 0px 1px;
    --light-text-effect: 0px 0px 5px rgba(231, 231, 231, 0.7);

    overflow-x: hidden;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Rotas />
    </>
  );
};

export default App;
