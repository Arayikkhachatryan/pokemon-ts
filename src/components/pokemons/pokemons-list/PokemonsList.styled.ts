import styled from "styled-components";

export const PokemonsListWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  height: 100vh;
  .pokemons {
    width: 100%;
    max-width: 768px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > button {
      width: 120px;
      height: 30px;
    }

    
  }
`;

export const PokemonsListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  text-align: center;

  > p {
    margin-top: 24px;
  }
`;

export const Container = styled.div``;
