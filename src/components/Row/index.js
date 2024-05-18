import React from 'react';
import { StyledRow } from './styles';

const Row = ({ children, ...props }) => (
  <StyledRow {...props}>
    {children}
  </StyledRow>
);

export default Row;