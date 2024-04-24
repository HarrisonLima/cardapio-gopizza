import styled from "styled-components";

const CustomHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 48px 0;
  width: 100vw;
`;

const CustomTitle = styled.h1`
    color: var(--primary-color); 
    font-size:4rem;
    font-weight: 700;
`;

const Header = () => {
  return (
    <CustomHeader>
      <CustomTitle>Gopizza</CustomTitle>
    </CustomHeader>
  );
};

export default Header;
