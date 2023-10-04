import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  gap: 2%;
  border-radius: 0 0 50px 50px;
  background-color: ${({ theme }) => theme.color.blue};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;
