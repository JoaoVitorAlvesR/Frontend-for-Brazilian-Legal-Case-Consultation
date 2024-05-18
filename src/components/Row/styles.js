import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  ${({ gap }) => gap && `
    gap: ${gap};
  `}
  ${({ align }) => align && `
    align-items: ${align};
  `}
  ${({ justify }) => justify && `
    justify-content: ${justify};
  `}
  ${({ flex }) => flex && `
    flex: ${flex};
  `}
  ${({ margin }) => margin && `
    margin: ${margin};
  `}
  ${({ padding }) => padding && `
    padding: ${padding};
  `}
`;