import styled from "styled-components";
import cardapio from "./cardapio.json";
import IOption from "../../interfaces/IOption";

const CustomSection = styled.section`
  max-width: 1920px;
  width: 100vw;
`;

const CustomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 0 64px;

  @media (max-width: 720px) {
    gap: 32px;
    padding: 0 32px;
  }

  @media (max-width: 480px) {
    padding: 0 24px;
  }
`;

const CustomMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CustomMenuTitleContainer = styled.span`
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
`;

const CustomMenuTitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    font-size: 1.25rem;
  }
`;

const CustomMenuSizes = styled.span`
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    column-gap: 16px;
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 8px;
  }
`;

const CustomSize = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  width: 160px;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
    width: 96px;
  }

  @media (max-width: 720px) {
    font-size: 1.25rem;
    width: 80px;
  }

  @media (max-width: 720px) {
    font-size: 1rem;
  }
`;

const CustomMenuSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const CustomMenuSection = styled.span`
  display: flex;
  gap: 8px;
  justify-content: space-between;

  &:hover {
    background-color: rgba(40, 40, 40, 0.3);
    transition: 0.1s background-color;
  }

  @media (max-width: 1280px) {
    gap: 32px;
  }

  @media (max-width: 720px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const CustomMenuSectionContent = styled.span`
  display: flex;
  flex-direction: column;
`;

const CustomMenuSectionTitle = styled.h3`
  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }
`;

const CustomMenuSectionIngredientes = styled.p`
  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }

  @media (max-width: 720px) {
    font-size: 0.75rem;
  }
`;

const CustomMenuPrices = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
  }
`;

const CustomContainerPrice = styled.span`
  align-items: center;
  border-right: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  height: 100%;
  width: 160px;

  &:first-child {
    border-left: 1px solid var(--border-color);
  }

  @media (max-width: 1280px) {
    width: 96px;
  }

  @media (max-width: 720px) {
    width: 80px;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }
`;

const CustomPrice = styled.h3`
  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }

  @media (max-width: 720px) {
    font-size: 0.75rem;
  }
`;
const varietesOfSize = [
  "Pizzas tradicionais",
  "Pizzas especiais",
  "Pizzas doces",
];

const sizeContainer = (
  <CustomMenuSizes>
    <CustomSize>P</CustomSize>
    <CustomSize>M</CustomSize>
    <CustomSize>G</CustomSize>
    <CustomSize>GG</CustomSize>
  </CustomMenuSizes>
);

const Cardapio = () => {
  return (
    <CustomSection>
      <CustomContent>
        <CustomMenu>
          {Object.entries(cardapio[0]).map(
            ([modulo, opcoes]: [string, IOption[]], index) => {
              const isVarietyOfSize = varietesOfSize.includes(modulo);

              return (
                <div key={index}>
                  <CustomMenuTitleContainer>
                    <CustomMenuTitle>{modulo}</CustomMenuTitle>
                    {isVarietyOfSize ? { ...sizeContainer } : null}
                  </CustomMenuTitleContainer>
                  <CustomMenuSections>
                    {opcoes.map((opcao: IOption, index) => {
                      return (
                        <CustomMenuSection key={index}>
                          <CustomMenuSectionContent>
                            <CustomMenuSectionTitle>
                              {opcao.titulo}
                            </CustomMenuSectionTitle>
                            {opcao.ingredientes ? (
                              <CustomMenuSectionIngredientes>
                                (
                                {opcao.ingredientes.reduce(
                                  (
                                    acc: string[],
                                    ingrediente: string,
                                    index
                                  ) => {
                                    if (index === 0) {
                                      return [ingrediente];
                                    } else {
                                      return [...acc, `, ${ingrediente}`];
                                    }
                                  },
                                  []
                                )}
                                )
                              </CustomMenuSectionIngredientes>
                            ) : null}
                          </CustomMenuSectionContent>
                          <CustomMenuPrices>
                            {Array.isArray(opcao.valor) ? (
                              opcao.valor.map(
                                (valor: string, index: number) => (
                                  <CustomContainerPrice
                                    key={index}
                                    data-list={true}
                                  >
                                    <CustomPrice>{valor}</CustomPrice>
                                  </CustomContainerPrice>
                                )
                              )
                            ) : (
                              <CustomContainerPrice>
                                <CustomPrice>{opcao.valor}</CustomPrice>
                              </CustomContainerPrice>
                            )}
                          </CustomMenuPrices>
                        </CustomMenuSection>
                      );
                    })}
                  </CustomMenuSections>
                </div>
              );
            }
          )}
        </CustomMenu>
      </CustomContent>
    </CustomSection>
  );
};

export default Cardapio;
