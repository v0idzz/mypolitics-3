import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 6rem);
  padding: 2rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const PoliticianSubHeader = styled(Header)`
  border-radius: 0;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding: 1.5rem;
  text-align: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 2rem;
  width: auto;
  display: block;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: right;
  flex-direction: column;
`;

export const Date = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  }
`;

export const Id = styled(Date)`
  margin-top: 0.5em;
  color: ${({ theme }) => theme.colors.textMuted};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    margin-right: 0.25em;
  }
`;
