import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  height: 3rem;
  width: 3rem;
  object-fit: cover;
  margin-right: 1rem;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  margin: 0;
  line-height: 1;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export const Lead = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.primary.light};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1;
  margin: 0.25rem 0 0;
`;
