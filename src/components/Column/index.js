import React from 'react';
import { StyledColumn } from './styles';

const Column = ({ children, ...props }) => (
  <StyledColumn {...props}>
    {children}
  </StyledColumn>
);

export default Column;