import React, { useEffect, useState } from 'react'
import { Container, TextBody, Title, User, UserWrapper } from './style';
import { IPosts } from '../../screens/Home/Home';
import api from '../../services/api';
import { IUser } from './CardPosts.intefaces';
import { useNavigation } from '@react-navigation/native';

type Props = {
  element: IPosts;
}

function CardPost({ element }: Props): React.ReactElement{
  const {navigate} = useNavigation();

  const [data, setData] = useState({} as IUser);

  function getUser() {
    api.get(`/users/${element.userId}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  function navigateToUserDetails(): void {
    navigate('UserDetails', {user: data})
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <Container onPress={() => console.log('Pressed Post')}>
      <UserWrapper onPress={navigateToUserDetails}>
        <User>{data?.name}</User>
      </UserWrapper>

      <Title>{element.title}</Title>
      <TextBody>{element.body}</TextBody>
    </Container>
  );
}

export default CardPost;