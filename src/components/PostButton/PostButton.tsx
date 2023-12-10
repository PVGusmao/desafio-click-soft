import React, { useState } from 'react'
import { Container, Input, InputWrapper, Text } from './style';
import { MaterialIcons, Feather  } from '@expo/vector-icons'; 
import api from '../../services/api';
import Toast from 'react-native-toast-message';
import { Button } from '../Common/Button/Button';
import { useApp } from '../../context/app.context';

type Props = {
  showInputPost: boolean;
  setShowInputPost: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Renders the PostButton component.
 *
 * @param {boolean} showInputPost - flag to determine whether to show the input for creating a new post
 * @param {function} setShowInputPost - function to toggle the showInputPost flag
 * @return {React.ReactElement} The rendered PostButton component
 */
function PostButton({ showInputPost, setShowInputPost }: Props): React.ReactElement {
  const {allPosts, setAllPosts} = useApp();

  const [newPost, setNewPost] = useState({
    name: '',
    title: '',
    body: '',
    userId: 11
  })

  /**
   * Posts data to the server.
   *
   * @return {void} No return value.
   */
  function post(): void {
    if (newPost.name.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Nome de usuário obrigatório!',
        text2: 'Por favor, digite um nome de usuário.'
      });
      return 
    }

    api
      .post('/posts', newPost)
      .then((res) => {
        const obj = {
          ...res.data,
          name: newPost.name,
          id: allPosts.length + 1
        }  
        setAllPosts([ ...allPosts, obj])
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'Algo deu errado!',
          text2: error?.response?.data?.message
        });
      })
  }

  return (
    <>
        <Container onPress={() => setShowInputPost(!showInputPost)}>
          {
            !showInputPost ?
            <MaterialIcons name="post-add" size={24} color="#666666" /> :
            <Feather name="arrow-up-circle" size={24} color="#666666" />
          }
          <Text>{!showInputPost ? 'O que você tem em mente?' : 'Vamos voltar para os posts?' }</Text>
        </Container>

      {
        showInputPost
        && <InputWrapper>
          <Input
            maxLength={30}
            placeholder='Qual seu nome?'
            placeholderTextColor={'#aaaaaa'}
            onChangeText={(name) => setNewPost({ ...newPost, name })}
          />

          <Input
            maxLength={30}
            placeholder='Título do post'
            placeholderTextColor={'#aaaaaa'}
            onChangeText={(title) => setNewPost({ ...newPost, title })}
          />

          <Input
            multiline={true}
            numberOfLines={10}
            placeholder='O que deseja compartilhar'
            placeholderTextColor={'#aaaaaa'}
            style={{
              textAlignVertical: 'top',
            }}
            onChangeText={(body) => setNewPost({ ...newPost, body })}
          />

          <Button onPress={post} title="Postar" />
        </InputWrapper>
      }
    </>
  );
}

export default PostButton;