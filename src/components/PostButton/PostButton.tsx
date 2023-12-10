import React, { useState } from 'react'
import { ButtonPost, ButtonText, Container, Input, InputWrapper, Text } from './style';
import { MaterialIcons, Feather  } from '@expo/vector-icons'; 
import api from '../../services/api';
import Toast from 'react-native-toast-message';
import { IPosts } from '../../screens/Home/Home';

type Props = {
  data: IPosts[];
  showInputPost: boolean;
  setData: React.Dispatch<React.SetStateAction<IPosts[]>>;
  setShowInputPost: React.Dispatch<React.SetStateAction<boolean>>;
}

function PostButton({ showInputPost, setShowInputPost, data, setData }: Props): React.ReactElement {
  const [newPost, setNewPost] = useState({
    name: '',
    title: '',
    body: '',
    userId: 11
  })

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
          name: newPost.name,
          ...res.data,
        }  
        setData([obj, ...data])
      })
      .catch((error) => console.log(error.response.message))
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

          <ButtonPost onPress={post}>
            <ButtonText>Postar</ButtonText>
          </ButtonPost>
        </InputWrapper>
      }
    </>
  );
}

export default PostButton;