import React, { useState } from 'react'
import { Container, InputBody, InputTitle, Text } from './style';
import { IRoute } from '../../globalInterfaces';
import api from '../../services/api';
import { Button } from '../../components/Common/Button/Button';
import { useApp } from '../../context/app.context';
import { IPosts } from '../Home/Home';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

type Props = {
  route: IRoute;
}

/**
 * Edits a post by sending a PATCH request to the server.
 *
 * @return {void} This function does not return anything.
 */
function EditPost({route}: Props): React.ReactElement {
  const {allPosts, setAllPosts} = useApp();
  const {navigate} = useNavigation();

  const {user, post} = route.params;

  const [body, setBody] = useState({
    title: post.title,
    body: post.body,
  });

  /**
   * Edits a post by sending a PATCH request to the server.
   *
   * @return {void} This function does not return anything.
   */
  function editPost(): void {
    api
      .patch(`/posts/${post.id}`, body)
      .then((res) => {
        const newArray = allPosts.filter((element) => element.id !== post.id);
        
        const newPostObj = {
          ...res.data,
          name: post.name ? post.name : '',
        }

        newArray.push(newPostObj);
        newArray.sort((a,b) => a.id -b.id)
        setAllPosts(newArray);
        
        Toast.show({
          type: 'success',
          text1: 'Sucesso.',
          text2: 'Post editado com sucesso.',
        });

        navigate('Home');
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'Algo deu errado.',
          text2: error.response.data.message,
        });
      })
  }

  return (
    <Container>
      <InputTitle
        maxLength={30}
        placeholder={post.title}
        placeholderTextColor={'#aaaaaa'}
        onChangeText={(e) => setBody({...body, title: e})}
      />

      <InputBody
        multiline={true}
        numberOfLines={10}
        placeholder={post.body}
        placeholderTextColor={'#aaaaaa'}
        style={{
          textAlignVertical: 'top',
        }}
        onChangeText={(e) => setBody({...body, body: e})}
      />

      <Button title='Atualizar Post' onPress={editPost} />
    </Container>
  );
}

export default EditPost;