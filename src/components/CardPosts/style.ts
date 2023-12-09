import styled from 'styled-components/native'

export const Container = styled.Pressable`
  padding-horizontal: 15px;
  padding-vertical: 10px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
  elevation: 2;
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
