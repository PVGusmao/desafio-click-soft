import React, { useEffect, useState } from 'react'
import { Container, RemovePost, TextBody, Title, User, UserWrapper } from './style';
import { IPosts } from '../../screens/Home/Home';
import api from '../../services/api';
import { IUser } from './CardPosts.intefaces';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/app.context';
import Toast from 'react-native-toast-message';

type Props = {
  element: IPosts;
  showInputPost: boolean;
}

/**
 * Renders a card post component.
 *
 * @param {Props} element - The element prop.
 * @param {boolean} showInputPost - The showInputPost prop.
 * @return {React.ReactElement} The rendered card post component.
 */
function CardPost({ element, showInputPost }: Props): React.ReactElement{
  const {allPosts, setAllPosts} = useApp();

  const {navigate} = useNavigation();

  const [data, setData] = useState({} as IUser);

  /**
   * Retrieves user data from the API.
   *
   * @return {void} This function does not return a value.
   */
  function getUser(): void {
    api.get(`/users/${element.userId}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  /**
   * Deletes a user.
   *
   * @return {void} No return value.
   */
  function deleteUser(): void {
    api.delete(`/posts/${element.id}`)
      .then((response) => {
        const filteredAllPosts = allPosts.filter((post) => post.id !== element.id)
        filteredAllPosts.sort((a,b) => a.id -b.id)
        setAllPosts(filteredAllPosts)
        Toast.show({
          type: 'success',
          text1: 'Sucesso.',
          text2: 'Post excluido com sucesso.',
        });
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'Algo deu errado.',
          text2: error.response.data.message,
        });
        console.log(error.response.data)
      })
  }

  /**
   * Navigates to the user details page.
   *
   * @return {void} This function does not return anything.
   */
  function navigateToUserDetails(): void {
    navigate('UserDetails', {user: data})
  }

/**
 * Navigates to the EditPost screen with the specified parameters.
 *
 * @return {void} 
 */
  function navigateToEditPost(): void {
    navigate('EditPost',
      {
        post: element, 
        user: data, 
      })
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <Container disabled={showInputPost} showInputPost={showInputPost} onPress={navigateToEditPost}>
      <RemovePost disabled={showInputPost} onPress={deleteUser}>
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