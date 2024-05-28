import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const CustomFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 64px;
  width: 100vw;

  @media (max-width: 360px) {
    margin-top: 32px;
  }
`;

const CustomFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  justify-content: center;
  padding: 64px;

  @media (max-width: 1280px) {
    padding: 64px 32px;
  }

  @media (max-width: 780px) {
    gap: 32px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    padding: 24px;
  }

  @media (max-width: 360px) {
    gap: 8px;
    padding: 16px;
  }
`;

const CustomLogoContainer = styled.span`
  display: flex;
  justify-content: center;
`;

const CustomLogo = styled.h1`
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;

  &:hover {
    text-shadow: var(--light-text-effect);
    transition: 0.3s text-shadow;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
  }

  &::before {
    left: -32px;
    border-width: 10px 0 10px 18px;
    border-color: transparent transparent transparent var(--primary-color);
  }

  &::after {
    right: -32px;
    border-width: 10px 18px 10px 0;
    border-color: transparent var(--primary-color) transparent transparent;
  }

  @media (max-width: 720px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;

    &::before {
      left: -24px;
      border-width: 6px 0 6px 12px;
      border-color: transparent transparent transparent var(--primary-color);
    }

    &::after {
      right: -24px;
      border-width: 6px 12px 6px 0;
      border-color: transparent var(--primary-color) transparent transparent;
    }
  }
`;

const CustomContainers = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-top: 32px;
  width: 100%;

  > span:not(:last-child) {
    border-right: 1px solid var(--border-color);
    padding-right: 16px;
  }

  @media (max-width: 780px) {
    gap: 32px;

    display: grid;
    > span:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
      border-right: 0;
      padding-right: 0px;
    }
  }

  @media (max-width: 360px) {
    margin-top: 32px;
    gap: 32px;
  }
`;

const CustomContainer = styled.span`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  min-height: 200px;
  min-width: 200px;

  @media (max-width: 1280px) {
    min-width: 160px;
    max-width: 320px;
  }

  @media (max-width: 780px) {
    flex-grow: 0;
    max-width: 400px;
    min-height: 150px;
    min-width: 200px;
    padding-bottom: 16px;
  }
`;

const CustomTitleContainer = styled.h2`
  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const CustomList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;
`;

const CustomItemList = styled.li`
  &:hover {
    text-shadow: var(--light-text-effect);
  }

  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }
`;

const CustomTexto = styled.p`
  text-align: justify;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }
`;

const CustomSocialsMedias = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
`;

const CustomSocialMediasIcons = styled.span`
  display: flex;
  gap: 32px;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const CustomContainerIcon = styled.span`
  align-items: center;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 16px;

  &:hover {
    background-color: var(--primary-color);
    box-shadow: var(--light-box-effect);
    color: var(--background-color);
    transition: 0.3s background-color, 0.3s color, 0.3s box-shadow;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const CustomLink = styled.a`
  &,
  &:visited,
  &:link {
    color: inherit;
    text-decoration: none;
  }
`;

const CustomIcon = styled(FontAwesomeIcon)`
  height: 32px;
  width: 32px;

  @media (max-width: 480px) {
    height: 24px;
    width: 24px;
  }
`;

const CustomCopyright = styled.span`
  align-items: center;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const CustomCopyrightText = styled.h3`
  &:hover {
    color: var(--primary-color);
    transition: 0.3s color;

    > strong {
      transition: 0.3s text-shadow;
      text-shadow: var(--light-text-effect);
    }
  }

  > strong {
    color: var(--primary-color);
    font-weight: 700;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <CustomFooter>
      <CustomFooterContent>
        <CustomLogoContainer>
          <CustomLogo>Gopizza</CustomLogo>
        </CustomLogoContainer>
        <CustomContainers>
          <CustomContainer data-barvisible={true}>
            <CustomTitleContainer>Cardápio</CustomTitleContainer>
            <CustomList>
              <CustomItemList>Pizzas tradicionais</CustomItemList>
              <CustomItemList>Pizzas especiais</CustomItemList>
              <CustomItemList>Pizzas doces</CustomItemList>
              <CustomItemList>Bebidas</CustomItemList>
              <CustomItemList>Bebidas alcoólicas</CustomItemList>
            </CustomList>
          </CustomContainer>
          <CustomContainer
            data-barvisible={window.innerWidth > 780 ? true : false}
          >
            <CustomTitleContainer>Contatos</CustomTitleContainer>
            <CustomList>
              <CustomItemList>
                Av. Gopizza, N° 777, Centro - Cianorte-PR
              </CustomItemList>
              <CustomItemList>+55 (44) 9.8877-6655</CustomItemList>
              <CustomItemList>gopizza@gmail.com</CustomItemList>
            </CustomList>
          </CustomContainer>
          <CustomContainer>
            <CustomTitleContainer>Sobre-nos</CustomTitleContainer>
            <CustomTexto>
              Na Gopizza, somos mais do que uma pizzaria - somos uma família.
              Desde nossa inauguração, buscamos criar um ambiente acolhedor onde
              amigos e familiares se reúnam para compartilhar boas conversas e
              deliciosas fatias de pizza. Com um compromisso inabalável com a
              qualidade e a satisfação do cliente, estamos empenhados em
              continuar a ser o destino preferido para todos os amantes de
              pizza.
            </CustomTexto>
          </CustomContainer>
        </CustomContainers>
        <CustomSocialsMedias>
          <CustomTitleContainer>
            Acompanhe-nos nas redes sociais
          </CustomTitleContainer>
          <CustomSocialMediasIcons>
            <CustomContainerIcon>
              <CustomLink href="https://github.com/HarrisonLima">
                <CustomIcon icon={faGithub} />
              </CustomLink>
            </CustomContainerIcon>
            <CustomContainerIcon>
              <CustomLink href="https://www.linkedin.com/in/harrison-fabiano-de-lima/">
                <CustomIcon icon={faLinkedin} />
              </CustomLink>
            </CustomContainerIcon>
            <CustomContainerIcon>
              <CustomLink href="mailto:harrisonlima92@gmail.com">
                <CustomIcon icon={faEnvelope} />
              </CustomLink>
            </CustomContainerIcon>
          </CustomSocialMediasIcons>
        </CustomSocialsMedias>
        <CustomCopyright>
          <CustomCopyrightText>
            Copyright &copy; 2024 <strong>DevTeam</strong>
          </CustomCopyrightText>
        </CustomCopyright>
      </CustomFooterContent>
    </CustomFooter>
  );
};

export default Footer;
