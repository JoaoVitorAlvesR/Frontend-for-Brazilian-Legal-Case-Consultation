import styled from 'styled-components';

export const StyledText = styled.div`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ size })=> size };
  font-weight: ${({ weight })=> weight };
  line-height: ${({ line })=> line };
  opacity: ${({ lowOpacity }) => lowOpacity && '.5'};
  align-self: ${({ alignSelf }) => alignSelf};
  border-bottom: ${({ borderBottom }) => borderBottom};
`;