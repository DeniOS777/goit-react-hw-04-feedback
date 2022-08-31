import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  min-width: 80px;
  color: ${p => p.theme.colors.whiteColor};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.02em;
  background-color: ${p => p.theme.colors.neutralColor};
  border-style: none;
  border-radius: 5px;
  transition: background-color 0.3s linear, transform 0.1s linear;
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

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
