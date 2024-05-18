import styled from 'styled-components'


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 40px;
`;

export const NavDiv = styled.div`
  background-color: #141414;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 100px;
  padding: 30px;
  
`;

export const TitleHome = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #f5f5f5;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.1)
  }
`;

export const TextLink = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  color: #259073;
  gap: 12px;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.1)
  }
`;

export const TextLinkAdmin = styled.div`
  margin-right: 17%;
  display: inline-flex;
  font-size: 20px;
  font-weight: bold;
  color: #259073;
  gap: 12px;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.1)
  }
`;