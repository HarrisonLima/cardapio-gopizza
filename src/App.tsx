import { createGlobalStyle } from "styled-components";
import Rotas from "./routes";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  };

  :root{
    background-color: var(--background-color);
    color: var(--terciary-color);
    font-family: var(--font-style);
    font-size: 16px;

    --primary-color: #E7E7E7;
    --secondary-color: #C9C9C9;
    --terciary-color: #BDBDBD;

    --font-style: "Jost", sans serif;

    --background-color: #121212;
    --border-color: #585858;
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
