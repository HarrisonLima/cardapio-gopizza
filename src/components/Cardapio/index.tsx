import styled from "styled-components";
import cardapio from "./cardapio.json";

const CustomSection = styled.section`
  box-sizing: border-box;
  max-width: 1920px;
  width: 100vw;
`;

const CustomContent = styled.div`
  box-sizing: content-box;
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

const CustomSectionTitle = styled.h2`
  border-bottom: 1px solid var(--border-color);
  color: var(--primary-color);
  font-size: 2rem;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    font-size: 1.25rem;
  }
`;

const CustomSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const CustomOption = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;

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

const CustomContainer = styled.span`
  display: flex;
  flex-direction: column;
`;

const CustomTitleOption = styled.h3`
  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }
`;

const CustomIngredientes = styled.p`
  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }

  @media (max-width: 720px) {
    font-size: 0.75rem;
  }
`;

const CustomPrices = styled.div`
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
  display: flex;
  justify-content: center;
  height: 100%;
  width: 160px;

  @media (max-width: 1280px) {
    width: 80px;
  }

  @media (max-width: 720px) {
    width: 64px;
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

const Cardapio = () => {
  return (
    <CustomSection>
      <CustomContent>
        <CustomMenu>
          {Object.entries(cardapio[0]).map(
            ([modulo, opcoes]: [string, any[]], index) => {
              return (
                <div key={index}>
                  <CustomSectionTitle>{modulo}</CustomSectionTitle>
                  <CustomSectionContent>
                    {opcoes.map((opcao: any, index) => {
                      return (
                        <CustomOption key={index}>
                          <CustomContainer>
                            <CustomTitleOption>
                              {opcao.título}
                            </CustomTitleOption>
                            {opcao.ingredientes ? (
                              <CustomIngredientes>
                                ({opcao.ingredientes})
                              </CustomIngredientes>
                            ) : null}
                          </CustomContainer>
                          <CustomPrices>
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
                          </CustomPrices>
                        </CustomOption>
                      );
                    })}
                  </CustomSectionContent>
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
