import React from 'react';
import { StyledText } from './styles';

const Text = ({ children, ...props }) => (
  <StyledText {...props}>
    {children}
  </StyledText>
);

export default Text;