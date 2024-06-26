'use client';
import Head from 'next/head'
import NavHome from '@/components/NavHome'
import {ColumnArticle, Title, SubTitle, InputStyle, ButtonStyle, LinkStyle, Loader, ListStyle, ContentListStyle, ContentComplements } from '@/styles/home'
import { useEffect, useState } from 'react';
import { getProcess } from './api/home';
import Row from '@/components/Row';
import Column from '@/components/Column';
import Text from '@/components/Text';
import moment from 'moment';
import 'moment/locale/pt-br';  // Importa o locale em português do Brasil


export default function Home() {
  const [ numberProcess, setNumberProcess ] = useState();
  const [ process, setProcess ] = useState();
  const [ loadingProcess, setLoadingProcess ] = useState();
  moment.locale('pt-br');
  useEffect(() => {
    
  }, []);

  const fetchProcessData = async () => {
    try {
      const processData = await getProcess(numberProcess.toString());
      setLoadingProcess(false)
      setProcess(processData);
      console.log(processData)
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleChangeProcessNumber = (value) => {
    console.log(value)
    setNumberProcess(value)
  }

  const handleClickSearch = () => {
    setLoadingProcess(true)
    console.log('pesquisar',numberProcess)
    fetchProcessData(numberProcess)
  }
  console.log(process)
  return (
    <>
      <Head>
        <title>Processo livre</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavHome/>
      </div>
      
        <Column gap='60px' margin='100px'>
          <ColumnArticle>
            <Title>Processo Livre</Title>
            <SubTitle>Consulte processos a partir do número de forma gratuita!</SubTitle>
          </ColumnArticle> 
          <Column align='center' gap='12px'>
          <Row width='100%' align='center' justify='center' gap='12px'>
            <InputStyle type='number' placeholder='Digite o número do processo' value={numberProcess} onChange={(e) => handleChangeProcessNumber(e.target.value)}/>
            <ButtonStyle onClick={()=> handleClickSearch()}>
              {loadingProcess && <Loader/>}
              Consultar
              </ButtonStyle>
          </Row> 

          <LinkStyle href="/faq">Deseja consultar de outra forma?</LinkStyle>
          </Column> 
        </Column>
        {process && !loadingProcess && (
          <Column>

          <Row width='100%'>
            <Column padding='20px' width='50%'>
              <Row gap='8px'><Text weight='700'>Orgão julgador:</Text><Text>{process?._source.orgaoJulgador.nome}</Text></Row>
              <Row gap='8px'><Text weight='700'>Nome do sistema:</Text> <Text>{process?._source.sistema.nome}</Text></Row>
              <Row gap='8px'><Text weight='700'>Tribunal:</Text><Text>Tribunal: {process?._source.tribunal}</Text></Row>
              <Row gap='8px'><Text weight='700'>Classe:</Text><Text>Classe: {process?._source.classe.nome}</Text></Row>
            </Column>

            <Column padding='20px' width='50%'>
              <Row gap='8px'><Text weight='700'>Data Ajuizamento:</Text><Text>{moment(process?._source.dataAjuizamento).format('LL')}</Text></Row>
              <Row gap='8px'><Text weight='700'>Data da ultima atualização: </Text><Text>{moment(process?._source.dataHoraUltimaAtualizacao).format('LL')}</Text></Row>
              <Row gap='8px'><Text weight='700'>Nivel de sigilo: </Text> <Text>{process?._source.nivelSigilo}</Text></Row>
              <Row gap='8px'><Text weight='700'>Número do processo: </Text><Text>{process?._source.numeroProcesso}</Text></Row>
           </Column>
          </Row>
          
          <ContentListStyle>
            <Row padding='0 0 10px 0'>
              <Text size='20px' weight='700'>Movimentações</Text>
            </Row>
            {process?._source.movimentos.map(({codigo, nome, dataHora, complementosTabelados}) => (
              <ListStyle>
                <Column>
                  <Row gap='8px'><Text weight='700'>Codigo:</Text>{codigo}</Row>
                  <Row gap='8px'><Text weight='700'>Nome:</Text>{nome}</Row>
                  <Row gap='8px'><Text weight='700'>Data</Text>{moment(dataHora).format('LL')}</Row>

                  {complementosTabelados?.length > 0 &&(
                    complementosTabelados.map(({descricao, nome})=> (
                      <ContentComplements>
                        <Row gap='8px'>
                          <Row gap='4px'>
                            <Text size='12px' weight='700'>Descrição:</Text>
                            <Text size='12px' weight='400'>{descricao}</Text>
                          </Row>
                          <Row gap='4px'>
                            <Text size='12px' weight='700'>Nome:</Text>
                            <Text size='12px' weight='400'>{nome}</Text>
                          </Row>
                        </Row>
                      </ContentComplements>
                    ))
                  )}

                </Column>
              </ListStyle>
            ))}
          </ContentListStyle>
        </Column>
        )}
        
    </>
  )
}
