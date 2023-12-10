import React from 'react'
import { Container, InputBody, InputTitle, Text } from './style';
import { IRoute } from '../../globalInterfaces';

type Props = {
  route: IRoute;
}

function EditPost({route}: Props): React.ReactElement {
  const {user, post} = route.params;

  return (
    <Container>
      <InputTitle
         maxLength={30}
         placeholder='Título do post'
         placeholderTextColor={'#aaaaaa'}
      />

      <InputBody
         multiline={true}
         numberOfLines={10}
         placeholder='O que deseja compartilhar'
         placeholderTextColor={'#aaaaaa'}
         style={{
           textAlignVertical: 'top',
         }}
      />
    </Container>
  );
}

export default EditPost;