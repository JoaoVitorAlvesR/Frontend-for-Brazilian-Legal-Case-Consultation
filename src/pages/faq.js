'use client';
import Head from 'next/head'
import NavHome from '@/components/NavHome'
import {ColumnArticle, Title, SubTitle, InputStyle, ButtonStyle, LinkStyle, TextStyle, RowStyle } from '@/styles/home'
import { useEffect, useState } from 'react';
import { getArticles } from './api/home';
import Row from '@/components/Row';
import Column from '@/components/Column';
import Text from '@/components/Text';
import Image from 'next/image';
import ArrowImage from '../icons/arrow.png';

export default function Faq() {
  const [ numberProcess, setNumberProcess ] = useState();
  
  useEffect(() => {
    fetchArticlesData();
  }, []);

  const fetchArticlesData = async (search) => {
    try {
      const articlesData = await getArticles(search ? { keyword: search } : {});
      setArticles(articlesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeProcessNumber = (value) => {
    console.log(value)
    setNumberProcess(value)
  }

  const handleClickSearch = () => {
    console.log('pesquisar',numberProcess)
  }

  return (
    <>
      <Head>
        <title>Informações úteis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <NavHome/>
      </div>
      
        <Column gap='60px' margin='100px'>
          <ColumnArticle>
            <Title>Informações úteis</Title>
          </ColumnArticle> 
          <Row width='100%' gap='100px'>
            <Column width='50%' gap='20px'>
              <RowStyle width='100%' justify='space-between' align='center'> <Text size='25px' weight='400'>Como saber o tribunal do meu processo?</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Como saber a instância do meu processo?</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Andamento/Movimentação do meu processo?</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Lista de tribunais trabalhistas</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Lista de tribunais eleitorais</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
            </Column>
            <Column width='50%' gap='20px'>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Como consultar meu processo </Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Termos e significados jurídicos</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Lista de tribunais superiores</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Lista de tribunais estaduais</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
              <RowStyle width='100%' justify='space-between' align='center'><Text size='25px' weight='400'>Lista de tribunais militares</Text><Image src={ArrowImage} alt="Icon1"  width={16} height={16}/></RowStyle>
            </Column>
          </Row> 
        </Column>
    </>
  )
}
