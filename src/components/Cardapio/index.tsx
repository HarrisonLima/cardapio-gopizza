import styled from "styled-components";
import cardapio from "./cardapio.json";

interface IOpcao {
  título: string;
  ingredientes: string;
  valor_tamanho_pequeno: string;
  valor_tamanho_médio: string;
  valor_tamanho_grande: string;
  valor_tamanho_extra_grande: string;
}

const CustomSection = styled.section`
box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  margin: 0 64px;
  width: 100%;
  overflow-x: hidden;
`;

const CustomSectionTitle = styled.h2`
  border-bottom: 1px solid var(--border-color);
  color: var(--primary-color);
  font-size: 2rem;
`;

const CustomMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Cardapio = () => {
  return (
    <CustomSection>
      <CustomSectionTitle>Pizzas tradicionais</CustomSectionTitle>
      <CustomMenu>
        {cardapio["Pizzas tradicionais"].map((secao: IOpcao, index) => {
          return (
            <span>
              <h3 key={index}>{secao.título}</h3>
              <p>({secao.ingredientes})</p>
            </span>
          );
        })}
      </CustomMenu>
    </CustomSection>
  );
};

export default Cardapio;
