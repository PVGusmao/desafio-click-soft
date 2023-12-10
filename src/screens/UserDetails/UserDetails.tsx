import React from 'react'
import { Company, Container, Name, PersonalData, Text, CompanyName, Address, SectionTitle, TextWrapper, LineIndicator } from './style';
import { IRoute } from '../../globalInterfaces';

type Props = {
  route: IRoute;
}

function UserDetails({ route }: Props): React.ReactElement {
  const { user } = route.params;

  return (
    <Container>
      <PersonalData>
        <SectionTitle>Dados pessoais:</SectionTitle>
        <TextWrapper>
          <Name>Nome - </Name>
          <Name>{user.name}</Name>
        </TextWrapper>
        
        <TextWrapper>
          <LineIndicator>E-mail - </LineIndicator>
          <Text>{user.email}</Text>
        </TextWrapper>
        
        <TextWrapper>
          <LineIndicator>Nick - </LineIndicator>
          <Text>{user.username}</Text>
        </TextWrapper>

        <TextWrapper>
          <LineIndicator>Phone - </LineIndicator>
          <Text>{user.phone}</Text>
        </TextWrapper>
      </PersonalData>

      <Company>
        <SectionTitle>Dados da empresa:</SectionTitle>

        <TextWrapper>
          <CompanyName>Nome da empresa - </CompanyName>
          <CompanyName>{user.company.name}</CompanyName>
        </TextWrapper>

        <TextWrapper>
          <LineIndicator>Slogan - </LineIndicator>
          <Text>{user.company.catchPhrase}</Text>
        </TextWrapper>

        <TextWrapper>
          <LineIndicator>Bs - </LineIndicator>
          <Text>{user.company.bs}</Text>
        </TextWrapper>

        <TextWrapper>
          <LineIndicator>Site - </LineIndicator>
          <Text>{user.website}</Text>
        </TextWrapper>
      </Company>

      <Address>
        <SectionTitle>Dados de endereço:</SectionTitle>
        <TextWrapper>
          <LineIndicator>Endereço - </LineIndicator>
          <Text>{user.address.street}, {user.address.suite}, {user.address.city}</Text>
        </TextWrapper>

        <TextWrapper>
          <LineIndicator>CEP - </LineIndicator>
          <Text>{user.address.zipcode}</Text>
        </TextWrapper>
      </Address>
    </Container>
  );
}

export default UserDetails;