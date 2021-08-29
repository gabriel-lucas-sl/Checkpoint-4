import styled from 'styled-components/native';

export const Page = styled.SafeAreaView`
    height: 100%;
`;

export const Container = styled.View`
    margin: 2px 15px;
`;

export const PatientInfo = styled.TouchableOpacity`
    border: 2px solid black;
    border-radius: 15px;
    padding: 10px;
    margin: 0 0 15px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    height: 50px;
    border-top-width: 1.2px;
`;

export const Positives = styled.View`
    border: 1px solid black;
    border-radius: 50px;
    padding: 5px 10px;
    align-items: center;
    flex: 1;
    margin-right: 5px;
`;

export const Suspects = styled.View`
    border: 1px solid black;
    border-radius: 50px;
    padding: 5px 10px;
    align-items: center;
    flex: 1;
    margin-right: 5px;
`;

export const Negatives = styled.View`
    border: 1px solid black;
    border-radius: 50px;
    padding: 5px 10px;
    align-items: center;
    flex: 1;
`;
