import styled from "styled-components";
import Logo from "../Logo";

const CustomHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 48px 0;
  max-width: 1920px;
  width: 100vw;
`;


const Header = () => {
  return (
    <CustomHeader>
      <Logo />
    </CustomHeader>
  );
};

export default Header;
