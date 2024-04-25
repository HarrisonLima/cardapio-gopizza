import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const CustomFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 64px;
  width: 100vw;
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
`;

const CustomTitle = styled.h1`
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;

  &:hover {
    text-shadow: var(--light-text-effect);
    transition: 0.3s text-shadow;
  }

  @media (max-width: 720px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CustomContainers = styled.div`
  display: flex;
  column-gap: 128px;
  row-gap: 64px;
  justify-content: center;

  @media (max-width: 1440px) {
    column-gap: 48px;
    flex-wrap: wrap;
  }

  @media (max-width: 1280px) {
    column-gap: 32px;
  }

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const CustomContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 250px;
  max-width: 400px;

  &[data-barvisible="true"] {
    border-right: 1px solid var(--border-color);
    padding-right: 48px;
  }

  > h2:hover {
    color: var(--primary-color);
    text-shadow: var(--light-text-effect);
  }

  @media (max-width: 1440px) {
    &[data-barvisible="true"] {
      padding-right: 32px;
    }
  }

  @media (max-width: 1280px) {
    min-width: 160px;
    max-width: 320px;
    &[data-barvisible="true"] {
      padding-right: 12px;
    }

    @media (max-width: 720px) {
      flex-grow: 2;
      &[data-barvisible="true"] {
        flex-grow: 1;
      }
    }
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
`;

const CustomIcon = styled(FontAwesomeIcon)`
  height: 32px;
  width: 32px;
`;

const CustomCopyright = styled.span`
  align-items: center;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const CustomCopyrightText = styled.h3`
  > strong {
    color: var(--primary-color);
    font-weight: 700;
  }

  > strong:hover {
    transition: 0.3s text-shadow;
    text-shadow: var(--light-text-effect);
  }
`;

const Footer = () => {
  return (
    <CustomFooter>
      <CustomFooterContent>
        <CustomTitle>Gopizza</CustomTitle>
        <CustomContainers>
          <CustomContainer data-barvisible={true}>
            <h2>Cardápio</h2>
            <CustomList>
              <CustomItemList>Pizzas tradicionais</CustomItemList>
              <CustomItemList>Pizzas especiais</CustomItemList>
              <CustomItemList>Pizzas doces</CustomItemList>
              <CustomItemList>Bebidas</CustomItemList>
              <CustomItemList>Bebidas alcoólicas</CustomItemList>
            </CustomList>
          </CustomContainer>
          <CustomContainer
            data-barvisible={window.innerWidth > 720 ? true : false}
          >
            <h2>Contatos</h2>
            <CustomList>
              <CustomItemList>
                Av. Gopizza, N° 777, Centro - Cianorte-PR
              </CustomItemList>
              <CustomItemList>+55 (44) 9.8877-6655</CustomItemList>
              <CustomItemList>gopizza@gmail.com</CustomItemList>
            </CustomList>
          </CustomContainer>
          <CustomContainer>
            <h2>Sobre-nos</h2>
            <CustomTexto>
              Na GoPizza, somos mais do que uma pizzaria - somos uma família.
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
          <CustomSocialMediasIcons>
            <CustomContainerIcon>
              <CustomIcon icon={faGithub} />
            </CustomContainerIcon>
            <CustomContainerIcon>
              <CustomIcon icon={faInstagram} />
            </CustomContainerIcon>
            <CustomContainerIcon>
              <CustomIcon icon={faLinkedin} />
            </CustomContainerIcon>
            <CustomContainerIcon>
              <CustomIcon icon={faEnvelope} />
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
