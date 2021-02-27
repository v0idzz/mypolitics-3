import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  opacity: 0.75;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};

  ${breakpoint("xs", "sm")`
    flex-direction: column;
    padding: 0.75rem;
    
    ${CategoryWrapper}:first-child {
      margin-bottom: 0.5rem;
    }
  `};
`;

export const Category = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  text-transform: capitalize;
`;

export const Divider = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.light};
  opacity: 0.25;
  margin: 0 0.25em;
`;

export const SubCategory = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.light};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AuthorWrapper = styled(CategoryWrapper)``;

export const AuthorImage = styled.img`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 0.75rem;
`;

export const AuthorName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
`;
