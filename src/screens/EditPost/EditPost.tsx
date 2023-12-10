import React, { useState } from 'react'
import { Container, InputBody, InputTitle, Text } from './style';
import { IRoute } from '../../globalInterfaces';
import api from '../../services/api';
import { Button } from '../../components/Common/Button/Button';
import { useApp } from '../../context/app.context';
import { IPosts } from '../Home/Home';

type Props = {
  route: IRoute;
}

function EditPost({route}: Props): React.ReactElement {
  const {allPosts, setAllPosts} = useApp();

  const {user, post} = route.params;

  const [body, setBody] = useState({
    title: post.title,
    body: post.body,
  });

  function editPost(): void {
    api
      .patch(`/posts/${post.id}`, body)
      .then((res) => {
        const newArray = allPosts.filter((element) => element.id !== post.id);
        newArray.push(res.data);
        newArray.sort((a,b) => a.id -b.id)
        setAllPosts(newArray);
      })
      .catch((error) => console.log(error.response.data))
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