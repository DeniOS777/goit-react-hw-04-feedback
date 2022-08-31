import styled from 'styled-components';

export const SectionContainer = styled.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 32px;
  color: ${p => p.theme.colors.titleColor};
`;
