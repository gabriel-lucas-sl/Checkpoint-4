import React from 'react';

import { Text, View } from 'react-native';

import {
  Page,
  Container,
  PatientBox,
  Header,
  Content,
  ContentText,
  Button,
} from './styles';


const RegistroDeAtendimento = ({ route, navigation }) => {
  const params = route.params.item;
  const item = params.name;
  const dateOfAttendance = params.dateOfAttendance;
  const symptoms = params.symptoms;
  const preexistingDisease = params.preexistingDisease;
  const statusCovid = params.statusCovid;

  return (
    <Page>
      <Container>
        <PatientBox>
          <Header>
            <Text style={{ fontWeight: 'bold', fontSize: 16, fontStyle: 'italic' }}>
              {item}
            </Text>
          </Header>

          <Content>
            <ContentText>Data de Atendimento: {dateOfAttendance}</ContentText>
            <ContentText>Sintomas: {symptoms}</ContentText>
            <ContentText>Doenças pré-existentes: {preexistingDisease}</ContentText>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ContentText>Status Covid:</ContentText>
              <Text style={{ color: `${route.params.statusColor}`, marginLeft: 10, fontWeight: 'bold'}}>{statusCovid}</Text>
            </View>
          </Content>
        </PatientBox>

        <Button
          onPress={() => { navigation.goBack() }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
            Voltar
          </Text>
        </Button>
      </Container>
    </Page>
  );
};

export default RegistroDeAtendimento;
