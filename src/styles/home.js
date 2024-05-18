import styled from 'styled-components'
import Link from 'next/link';
import Row from '@/components/Row';

export const ContentArticles = styled.div`
  display: flex;
  padding: 20px;
  borderRadius: 10px;
  gap: 10px;
  align-items: start;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
  ${({gap})=> gap && `gap: ${gap}` }
`;

export const ColumnArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;

`;

export const ButtonArticle = styled.div`
  background-color: #c8e98e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100px;
  color: #041122;  
  font-size: 20px;
  transition: .3s ease;
  &:hover{
    box-shadow: 0px 0px 6px 2px rgba(225, 225, 225, 0.70);
    transform: scale(1.1)
  }
`;

export const Title = styled.div`
  color: #041122;
  font-size: 50px;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  color: #000;
  font-size: 22px;
  font-weight: 400;
`;

export const RowArticle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const RowArticles = styled(RowArticle)`
  justify-content: center;
`;

export const Article = styled.div`
  font-size: 20px;
  color: #041122;;
`;

export const InputStyle = styled.input`
  border-radius: 10px;
  border: 2px solid #000;
  padding: 20px;
  width: 600px;
  font-size: 20px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


`;

export const ButtonStyle = styled.button`
  border-radius: 10px;
  border: 2px solid #000;
  padding: 20px;
  color: #000;
  background-color: #37ccc7;
  width: 200px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    background-color: #34e1eb;
  }
`;

export const LinkStyle = styled(Link)`
  font-size:20px;
  color: #34e1eb;
`;

export const RowStyle = styled(Row)`
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #000; 
  }
`;



