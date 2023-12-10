import React, { useEffect, useState } from 'react'
import { Container, RemovePost, TextBody, Title, User, UserWrapper } from './style';
import { IPosts } from '../../screens/Home/Home';
import api from '../../services/api';
import { IUser } from './CardPosts.intefaces';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  element: IPosts;
  allPosts: IPosts[];
  setAllPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
}

function CardPost({ element, allPosts, setAllPosts }: Props): React.ReactElement{
  const {navigate} = useNavigation();

  const [data, setData] = useState({} as IUser);

  function getUser(): void {
    api.get(`/users/${element.userId}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  function deleteUser(): void {
    api.delete(`/posts/${element.id}`)
      .then((response) => {
        const filteredAllPosts = allPosts.filter((post) => post.id !== element.id)
        setAllPosts(filteredAllPosts)
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
      <RemovePost onPress={deleteUser}>
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