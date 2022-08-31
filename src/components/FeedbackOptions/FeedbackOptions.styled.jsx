import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  min-width: 80px;
  color: ${p => p.theme.colors.whiteColor};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.middle};
  letter-spacing: 0.02em;
  background-color: ${p => p.theme.colors.neutralColor};
  border-style: none;
  border-radius: ${p => p.theme.radii.sm};
  transition: background-color 300ms linear, transform 100ms linear;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.neutralColorHover};
  }

  &:active {
    transform: scale(0.95);
  }

  &:first-child {
    background-color: ${p => p.theme.colors.greenColor};
    &:hover {
      background-color: ${p => p.theme.colors.greenColorHover};
    }
  }

  &:last-child {
    background-color: ${p => p.theme.colors.redColor};
    &:hover {
      background-color: ${p => p.theme.colors.redColorHover};
    }
  }
`;
