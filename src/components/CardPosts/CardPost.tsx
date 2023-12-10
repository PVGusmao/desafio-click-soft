import React, { useEffect, useState } from 'react'
import { Container, RemovePost, TextBody, Title, User, UserWrapper } from './style';
import { IPosts } from '../../screens/Home/Home';
import api from '../../services/api';
import { IUser } from './CardPosts.intefaces';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

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

  function navigateToEditPost(): void {
    navigate('EditPost', {post: element, user: data})
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <Container onPress={navigateToEditPost}>
      <RemovePost onPress={() => console.log('Pressed Remove Post')}>
        <Ionicons name="md-trash-outline" size={18} color="red" />
      </RemovePost>

      <UserWrapper onPress={navigateToUserDetails}>
        <User>{data?.name || element.name}</User>
      </UserWrapper>

      <Title>{element.title}</Title>
      <TextBody>{element.body}</TextBody>
    </Container>
  );
}

export default CardPost;