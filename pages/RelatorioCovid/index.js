import React from 'react';

import { FlatList, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import {
  Page,
  Container,
  PatientInfo,
  Header,
  Footer,
  Positives,
  Suspects,
  Negatives,
} from './styles';
import { RELATORIO_COVID } from '../../datas/relatorio-covid';

const RegistroCovid = () => {
  const renderPatientBox = ({ item }) => {
    const statusCovid = item.statusCovid;
    let statusColor = '';

    if (statusCovid == 'suspeito') {
      statusColor = 'red';
    } else if (statusCovid == 'negativo') {
      statusColor = 'green';
    } else {
      statusColor = 'yellow';
    }

    return(
      <PatientInfo>
        <Header>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
          <FontAwesome name="circle" size={12} color={statusColor} />
        </Header>
        <Text style={{ marginBottom: 2 }}>Sexo: {item.gender}</Text>
        <Text>Data de nascimento: {item.dateOfBirth}</Text>
      </PatientInfo>
    )
  }

  return (
    <Page>
      <Container>
        <FlatList
          data={RELATORIO_COVID}
          renderItem={renderPatientBox}
          keyExtractor={ item => item.id }
          showsVerticalScrollIndicator={false}
        />
        <Footer>
          <Positives>
            <Text>Positivos: 7</Text>
          </Positives>

          <Suspects>
            <Text>Suspeitos: 5</Text>
          </Suspects>

          <Negatives>
            <Text>Negativos: 3</Text>
          </Negatives>
        </Footer>
      </Container>
    </Page>
  );
};

export default RegistroCovid;
