import styled from "styled-components";

const CustomLogo = styled.h1`
  color: var(--primary-color);
  font-size: 4rem;
  font-weight: 700;

  &:hover {
    text-shadow: var(--light-text-effect);
    transition: 0.3s text-shadow;
  }

  @media (max-width: 720px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Logo = () => {
  return <CustomLogo>Gopizza</CustomLogo>;
};

export default Logo;
