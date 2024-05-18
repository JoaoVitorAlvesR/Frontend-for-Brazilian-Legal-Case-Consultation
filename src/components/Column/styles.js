import styled from 'styled-components';

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${({ width }) => width && `
    width: ${width};
  `}
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