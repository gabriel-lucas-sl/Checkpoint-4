import React from 'react';
import { FlatList, Text } from 'react-native';
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

const RegistroCovid = ({ navigation }) => {
  let countPostivies = 0, countNegatives = 0, countSuspects = 0;
  calculte();

  function calculte() {
    for (let i = 0; i < RELATORIO_COVID.length; i++) {
      const currentObject = RELATORIO_COVID[i];
      const statusCovid = currentObject.statusCovid;

      if (statusCovid == 'suspeito') {
        countSuspects++;
      } else if (statusCovid == 'negativo') {
        countNegatives++;
      } else {
        countPostivies++;
      }
    }
  }

  const renderPatientBox = ({ item }) => {
    const statusCovid = item.statusCovid;
    let statusColor = '';

    if (statusCovid == 'positivo') {
      statusColor = '#EC4646';
    } else if (statusCovid == 'negativo') {
      statusColor = '#80ED99';
    } else {
      statusColor = '#F5F7B2';
    }

    return(
      <PatientInfo
        onPress={() => { navigation.navigate('RegistroDeAtendimento', {
          item,
          statusColor: statusColor,
        }) }}
      >
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
          <Positives style={{ backgroundColor: '#EC4646' }}>
            <Text style={{ fontWeight: 'bold' }}>Positivos: {countPostivies}</Text>
          </Positives>

          <Suspects style={{ backgroundColor: '#F5F7B2' }}>
            <Text style={{ fontWeight: 'bold' }}>Suspeitos: {countSuspects}</Text>
          </Suspects>

          <Negatives style={{ backgroundColor: '#80ED99' }}>
            <Text style={{ fontWeight: 'bold' }}>Negativos: {countNegatives}</Text>
          </Negatives>
        </Footer>
      </Container>
    </Page>
  );
};

export default RegistroCovid;
