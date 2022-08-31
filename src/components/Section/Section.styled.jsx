import styled from 'styled-components';

export const SectionContainer = styled.section`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const SectionTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.titleColor};
`;
