import React from 'react'
import { ActivityIndicator } from 'react-native';

function Loading(){
  return (
    <ActivityIndicator style={{flex: 1}} size={'large'} color={'#aaa'} />
  );
}

export default Loading;