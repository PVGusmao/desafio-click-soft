import React from 'react'
import { Container, Text } from './style';
import { IUserRoute } from '../../globalInterfaces';

type Props = {
  route: IUserRoute;
}

function UserDetails({ route }: Props): React.ReactElement {
  const { user } = route.params;

  console.log(JSON.stringify(route));
  
  return (
    <Container>
      <Text>Meu componente</Text>
    </Container>
  );
}

export default UserDetails;