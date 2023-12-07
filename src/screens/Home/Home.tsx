import { TouchableOpacity } from "react-native";
import { Container, Text } from "./style";
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const {navigate} = useNavigation();

  return (
    <Container>
      {/* <Text>Home</Text> */}
      <TouchableOpacity onPress={() => navigate('Post')} style={{ backgroundColor: 'red', padding: 10}}>
        <Text>Navigate to Post</Text>
      </TouchableOpacity>
    </Container>
  )
}