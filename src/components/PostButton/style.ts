import styled from 'styled-components/native'

export const Container = styled.Pressable`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  margin-horizontal: 10px;
  padding: 5px 10px;
  border: 1px solid #aaaaaa;
  border-radius: 100px;
  background-color: #ffffff;
`;

export const Text = styled.Text`
  color: #666666;
  font-weight: bold;
  margin-left: 10px;
`;

export const InputWrapper = styled.View`

`

export const Input = styled.TextInput`
  margin: 5px 10px;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
`

export const ButtonPost = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #2f056b;
  padding: 8px;
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
`