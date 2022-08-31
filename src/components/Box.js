import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  border,
  position,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  space,
  layout,
  color,
  flexbox,
  grid,
  border,
  position,
  shadow
);
