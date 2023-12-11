import styled from 'styled-components/native'

type Props = {
  showInputPost: boolean
}

export const Container = styled.Pressable<Props>`
  padding-horizontal: 15px;
  padding-vertical: 10px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
  elevation: ${({showInputPost}) => showInputPost ? 0 : 2};
  position: relative;
  background-color: ${({showInputPost}) => showInputPost ? 'rgba(0,0,0,0.1)' : '#ffffff'};
`;

export const UserWrapper = styled.TouchableOpacity`

`;

export const User = styled.Text`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const TextBody = styled.Text`
  text-align: justify;
  font-size: 12px;
`;

export const RemovePost = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 10px;
  z-index: 10;
`
